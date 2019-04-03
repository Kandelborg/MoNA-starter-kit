import DialogFormUpdate from '@components/HoC/Form/Modals/DialogFormUpdate'
import postUpdateMutation from '@graphql/mutations/post/wrappers/PostUpdate'
import { i18n, withNamespaces } from '@i18n'
import { Lng } from '@i18n/types'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@material-ui/core'
import { PostBySlug_postBySlug } from 'database-api'
import { formatRelative, Locale } from 'kandelborg-date-fns'
import da from 'kandelborg-date-fns/locale/da'
import en from 'kandelborg-date-fns/locale/en-GB'
import FavoriteIcon from 'mdi-material-ui/HeartOutline'
import ShareIcon from 'mdi-material-ui/ShareVariant'
import MoreVertIcon from 'mdi-material-ui/Web'
import Link from 'next/link'
import { Dispatch, FunctionComponent, useEffect, useState } from 'react'
import { TranslateFn } from 'StatelessPage'
import { User } from 'User'

import PostMenu from './PostCardMenu'
import useStyles from './PostCardStyles'

const fnsLocales: { [lng: string]: Locale } = {
  da,
  en
}

interface IPostCardProps {
  user: User
  post: PostBySlug_postBySlug
  t: TranslateFn
}

const PostCard: FunctionComponent<IPostCardProps> = (props) => {
  const { post, t } = props
  const {
    id,
    author,
    imageSrc,
    contents,
    slug,
    isPublished,
    createdAt,
    updatedAt
  } = post

  const classes = useStyles()

  const [currentLng, setLanguage]: [Lng, Dispatch<Lng>] = useState(
    i18n.language
  )
  const [dateFnsLocale, setDateFnsLocale]: [Lng, Dispatch<Lng>] = useState(
    i18n.language.slice(0, 2)
  )

  const [menuOpen, setMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl]: [any, Dispatch<any>] = useState(null)

  const [displayedContent, setContent] = useState(contents![0])

  useEffect(() => {
    for (const content of contents!) {
      if (content.language.country === dateFnsLocale) {
        setContent(content)
      }
    }
  }, [dateFnsLocale])

  const changeDateFnsLocale = (lng: Lng) => {
    const loc = lng.slice(0, 2)

    if (lng !== dateFnsLocale) {
      setLanguage(lng)
      setDateFnsLocale(lng)
    }

    return fnsLocales[loc]
  }

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
    setMenuOpen(true)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    setMenuOpen(false)
  }

  let isAdmin = false
  let isAuthor = false

  if (props.user && props.user.role && props.user.id) {
    if (props.user.role === 'ADMIN') {
      isAdmin = true
      //  console.log('Admin')
    } else if (props.user.role === 'SITEMANAGER') {
      //  console.log('Site manager')
      isAdmin = true
    } else {
      isAdmin = false
    }

    if (props.user.id === post.author.id) {
      isAuthor = true
    }
  }

  return (
    <Card id={id} elevation={4} className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label={author.name} className={classes.avatar}>
            {author.name[0].toUpperCase()}
          </Avatar>
        }
        title={displayedContent.title}
        subheader={
          createdAt === updatedAt
            ? formatRelative(new Date(createdAt), new Date(), {
                locale: changeDateFnsLocale(currentLng)
              })
            : formatRelative(new Date(updatedAt), new Date(), {
                locale: changeDateFnsLocale(currentLng)
              })
        }
        action={
          <>
            <IconButton
              color="default"
              disabled={menuOpen && true}
              aria-haspopup="true"
              onClick={handleMenuOpen}>
              <MoreVertIcon
                titleAccess="Change language"
                className={classes.i18nIcon}
              />
            </IconButton>
            <PostMenu
              currentLng={currentLng}
              changeLocaleFn={changeDateFnsLocale}
              anchorEl={anchorEl}
              isMenuOpen={menuOpen}
              handleMenuClose={handleMenuClose}
            />
          </>
        }
      />

      <Link prefetch={true} href={`/blog/${slug}/`}>
        <CardMedia
          className={classes.media}
          image={imageSrc}
          title={displayedContent.imageAlt}
        />
      </Link>
      <Link prefetch={true} href={`/blog/${slug}/`}>
        <CardContent className={classes.clickable}>
          <Typography component="p">
            {isPublished ? displayedContent.text : 'No sneak peeks!'}
          </Typography>
        </CardContent>
      </Link>
      <CardActions className={classes.actions}>
        <Button
          variant="contained"
          size="small"
          color="primary"
          aria-label="Like">
          <FavoriteIcon /> {t('common:like')}
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          aria-label="Share">
          <ShareIcon /> {t('common:Share')}
          <img src="" alt="" role="presentation" />
        </Button>
        {/* If a user exists and they are the author or is admin */}
        {(isAdmin || isAuthor) && (
          <DialogFormUpdate
            title={`${t('common:update')} ${t('forms:post').toLowerCase()}`}
            form={postUpdateMutation({ post })}
          />
        )}
      </CardActions>
    </Card>
  )
}

export default withNamespaces(['common', 'forms'])(PostCard)

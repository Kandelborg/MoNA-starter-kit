import { Dispatch, FunctionComponent, useEffect, useState } from 'react'

import Router from 'next/router'

import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import ArrowLeftIcon from 'mdi-material-ui/ArrowLeft'
import FavoriteIcon from 'mdi-material-ui/HeartOutline'
import ShareIcon from 'mdi-material-ui/ShareVariant'

import { PostBySlug_postBySlug } from 'database-api'

import FormLocaleSwitcher from '../../HoC/Form/Fields/LocaleSwitcher/LocaleSwitcher'

import { format, Locale } from 'kandelborg-date-fns'
import da from 'kandelborg-date-fns/locale/da'
import en from 'kandelborg-date-fns/locale/en-GB'

import { i18n } from '@i18n'
import { Lng } from '@i18n/types'
import useStyles from './PostCardStyles'

const fnsLocales: { [lng: string]: Locale } = {
  da,
  en
}

interface IPostCardProps {
  post: PostBySlug_postBySlug
}

const PostPage: FunctionComponent<IPostCardProps> = (props) => {
  const {
    post: { id, author, imageSrc, contents, isPublished, createdAt, updatedAt }
  } = props

  const classes = useStyles()

  const [currentLng, setLanguage]: [Lng, Dispatch<Lng>] = useState(
    i18n.language
  )
  const [displayedContent, setContent] = useState(contents![0])

  const [dateFnsLocale, setDateFnsLocale]: [Lng, Dispatch<Lng>] = useState(
    i18n.language.slice(0, 2)
  )

  useEffect(() => {
    setLanguage(i18n.language)
    for (const content of contents!) {
      if (content.language.country === currentLng) {
        setContent(content)
      }
    }
  }, [])

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
      setDateFnsLocale(lng)
      setLanguage(lng)
    }

    return fnsLocales[loc]
  }

  return (
    <Grid id={id} className={classes.gridRoot}>
      <Typography variant="h1">{displayedContent.title}</Typography>
      <CardActions className={classes.actions} disableActionSpacing={true}>
        <IconButton aria-label="Go back" onClick={() => Router.back()}>
          <ArrowLeftIcon />
        </IconButton>

        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <FormLocaleSwitcher callbackFn={changeDateFnsLocale} />
      </CardActions>
      <CardContent>
        <img src={imageSrc} alt={displayedContent.imageAlt} />
        <Typography component="p" variant="body1">
          {isPublished ? displayedContent.text : ''}
        </Typography>
      </CardContent>

      <Typography variant="caption" align="right">
        Uploaded{' '}
        {createdAt === updatedAt
          ? format(new Date(createdAt), `'kl.' h B 'd.' do MMM`, {
              locale: changeDateFnsLocale(currentLng)
            })
          : format(new Date(updatedAt), `'kl.' h B 'd.' do MMM`, {
              locale: changeDateFnsLocale(currentLng)
            })}{' '}
        af {author.name}
      </Typography>
    </Grid>
  )
}

export default PostPage

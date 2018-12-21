/**
 * Do magic regexp ... *drumroll* ... TADAAA:
 *
 * If the app is built, production-server is a parent folder
 *
 * When developing, server is the folder we need to care about
 */
export default function removeServerFromDirname() {
  return __dirname
    .replace(/\/(production-server\/server)(\/)?/, '/')
    .replace(/\/(server)(\/)?/, '/');
}

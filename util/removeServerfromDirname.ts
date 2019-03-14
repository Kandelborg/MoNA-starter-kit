/**
 * Do magic regexp ... *drumroll* ... TADAAA:
 *
 * If the app is built, production-server is a parent folder
 *
 * When developing, server is the folder we need to care about
 * @returns {string} A string without the 'production-server' chars
 */
export default function removeServerFromDirname(): string {
  return __dirname
    .replace(/\/(production-server\/server)(\/)?/, '/')
    .replace(/\/(server)(\/)?/, '/')
}

/**
 * Function that takes SW registrations from navigator, resolves them,
 * and returns the resolved `ReadonlyArray`
 * @returns Array of Service Worker registrations
 */
function getSWRegistrations(): ReadonlyArray<ServiceWorkerRegistration> {
  if (!navigator || !navigator.serviceWorker) {
    throw new Error('No service worker found')
  }

  // Get SW registrations from navigator
  const promises = navigator.serviceWorker.getRegistrations()

  // Create variable for storing resolved registrations
  let registrations: ReadonlyArray<ServiceWorkerRegistration>

  /**
   * Function that takes SW registrations from navigator, resolves them,
   * and stores them in `registrations`
   */
  const resolvedRegistrations = () => {
    promises.then((reg) => (registrations = reg))

    return registrations
  }

  return resolvedRegistrations()
}

export default getSWRegistrations

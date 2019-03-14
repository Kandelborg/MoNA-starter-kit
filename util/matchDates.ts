export let matchedDates: any[] = []
export const eventsStartDatesArray: any[] = []

export default function matchDates(date: any, events: any[]) {
  // Empty the matched dates array because user have made a new selection.
  matchedDates = []

  // Fill empty array with only the start dates from events
  events.map((e) => eventsStartDatesArray.push(new Date(e)))
  // Find all events that matches the date parameter
  // Return those events from database.
  events.filter((e) => {
    // Declare string literals from date objects
    const eventDate = `${new Date(e)}`
    const dateString = `${date}`

    // Handy for debugging
    // console.info(`Matching the following values: \n${date}\n  ----------------- AND ----------------- \n${eventDate}`);

    // Match the strings, not the dates.
    if (`${eventDate}` === `${dateString}`) {
      // console.info(`It's a match!\n${eventDate} \n${date}`);
      // Fill empty array with event objects from database that match the date.
      matchedDates.push(e)

      // Handy for debugging
      // return; // console.info(matchedDates);
    }

    // Nothing matched
    // Empty the matched dates array because nothing matched.

    // return; // console.info(`Nothing matched\n\nThe matched dates array: (nothing should show) ${matchedDates}`);
  })
}

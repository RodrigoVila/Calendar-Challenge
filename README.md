# Shaun's Calendar Challenge! 🗓

The challenge here is to **create a reusable, vanilla-React calendar component**

Sound boring? Wait ‘til you’ve tried it 😉 I had to do this recently for a project of mine and I was surprised at how many twists and turns were involved.

## When you're done, create a Github repo with your completed code and send me a direct-message with the link

Here's what my solution looks like (note the fashionable dark-mode 😎):
![completed calendar example](./public/example-screen-shot.png)

## Submissions for the FREE ACCESS drawing must meet the following criteria:

1. **The calendar must “look like” a real calendar** - i.e. everything should be aligned in a 7-column grid, and the left-most column should be Sunday (or Saturday, or Monday, or whatever weekday your week starts on - I think I remember hearing that this is different in different parts of the world)
2. **The calendar must start by showing whatever month the `startingDate` prop belongs to** - note that in the `App.js` component, we’re currently passing `today`, but there are many situations where we’d want to pass a different `startingDate` and have the calendar jump to a different month in the past/future.
3. **The calendar must display the name of the current month, and allow the user to flip between different months** - note the “previous” and “next” buttons in the screenshot above - you’ll want to add something like these.
4. **The calendar component must take an `events` prop, and display those events on their corresponding days** - a list of fake event data is provided in `App.js` to show you the basic format of event data - look for the `fakeEvents`array and you’ll see what I mean.

## And for bonus points (you don’t have to do these, but they’re fun):

1. **The calendar itself should occupy 100% of the width and height of its container** - this allows whatever component we display the calendar inside of to decide the calendar’s size, which can make it much easier to insert this calendar into existing layouts. You’ll see that in `App.js`, the `Calendar` component is wrapped in a `div` with `height: ‘700px’` and `width: ‘400px’`. Feel free to play around with the size here and see if you can make your calendar responsive
2. **Allow users to add new events to the calendar** by clicking on one of the calendar cells. I’ve already provided the `onDateClicked` prop for this purpose

## And some hints:

1. JavaScript’s `Date` is going to be your friend here
2. You can tell if two `Dates` are equal by just comparing their year, month, and date and see if all of those are the same
3. You may want to create some sort of `getDatesForMonth` function which takes `year` and a `month` arguments and returns a date object for all 28 or 29 or 30 or 31 days in the month. Just a suggestion...
4. You’re allowed to use whatever styling libraries you want, but no libraries that take care of the calendar logic! That would be cheating ;)

## Getting the app running

1. Clone this repo with: `git clone https://github.com/shaunwa/calendar-challenge-starter.git calendar-challenge`
2. `cd calendar-challenge`
3. Install dependencies: `npm install`
4. Run it: `npm run start`
5. See it running on localhost:3000

That's it!

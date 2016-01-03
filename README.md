Dynamic Poll
==============

Creating a poll system (similar to Straw Poll) where you create a poll with options to vote on, share the link, and view the results. Most of the functionality is there including; creating the poll, clicking a 'copy link' button, voting and viewing. However, there's a couple things I still have left.

As of January 2nd, here's what's left todo:

- ~~**Real time updates:** Right now a user needs to refresh the 'view' page in order to see any updated results. Need to see changes to a vote without a page refresh~~ Completed Jan 3rd. Added a second viewpoll function that works off a delay. So we fetch the poll results, THEN we fetch them again every two seconds (may be a but much, but it works for now). Future implementation with Firebase is a must.
- ~~**Handle Sessions:** Technically a user can just press the 'back' button and vote again. I need to have it so a user can only vote once.~~ Completed Jan 2nd. Added a session variable that gets set to 'no' when creating a poll and gets set to 'yes' when you voted. Then made it so you can only vote if it's set to 'no'.
- ~~**Sorting:** Need to be able to sort the votes from top to bottom, with the most voted option being at the top.~~ The way my DB is setup with everything on a row, this is not going to be possible with ng-repeat. Will have to revisit.
- ~~**CSS Tidy up:** Need to make the page more user friendly and tidy up how it looks.~~ Completed Jan 3rd. Tidied up code, added nav bar, added default route, and used list groups and labels instead of a table.

Working version as it stands: http://www.bentoussi.com/dynamic-poll/
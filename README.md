Dynamic Poll
==============

Creating a poll system (similar to Straw Poll) where you create a poll with options to vote on, share the link, and view the results. Most of the functionality is there including; creating the poll, clicking a 'copy link' button, voting and viewing. However, there's a couple things I still have left.

As of January 2nd, here's what's left todo:

- **Real time updates:** Right now a user needs to refresh the 'view' page in order to see any updated results. Need to see changes to a vote without a page refresh
- ~~**Handle Sessions:** Technically a user can just press the 'back' button and vote again. I need to have it so a user can only vote once.~~ Completed Jan 2nd. Added a session variable that gets set to 'no' when creating a poll and gets set to 'yes' when you voted. Then made it so you can only vote if it's set to 'no'.
- **Sorting:** Need to be able to sort the votes from top to bottom, with the most voted option being at the top.
- **CSS Tidy up:** Need to make the page more user friendly and tidy up how it looks. 

Working version as it stands: http://www.bentoussi.com/dynamic-poll/#/
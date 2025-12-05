// Markdown Ordered List Item Converter
// Given a string representing an ordered list item in Markdown, return the equivalent HTML string.

// A valid ordered list item in Markdown must:

// Start with zero or more spaces, followed by
// A number (1 or greater) and a period (.), followed by
// At least one space, and then
// The list item text.
// If the string doesn't have the exact format above, return "Invalid format". Otherwise, wrap the list item text in li tags and return the string.

// For example, given "1. My item", return "<li>My item</li>".

// Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

function convertListItem(markdown) {
  console.log(markdown);
  // Start with zero or more spaces, followed by
  // \s	Matches whitespace characters (space, tab, newline)
  // x*	Matches zero or more occurrences of x
  // ^	Matches from beginning of a string, or the beginning of a line if the m (multiline) flag is set
  // const regex = /[\s*]/
  // A number (1 or greater) and a period (.), followed by
  // [0-9]	Matches all characters in the range from 0 to 9
  // x+	Matches at least one x
  // x{n}	Matches n occurences of x
  // const regex = /^[\s*][1-9+][\.{1}]/
  // console.log(regex.test(markdown))
  // at this point not sure if its working
  // At least one space, and then
  // The list item text.
  const regex = /^[\s]*[1-9+][\.{1}][\s+][a-z+]/i;
  console.log(regex.test(markdown));
  if (regex.test(markdown)) {
    console.log('Return the string!');
  }
  return 'Invalid format';
}

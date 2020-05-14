artoo.scrape('.allowEllipsis', {
  hotel_name: { sel: '.property_title'},
  review: {sel: '.review_count'},
  facility: { sel: '.icons_list'}
}, artoo.savePrettyJson);

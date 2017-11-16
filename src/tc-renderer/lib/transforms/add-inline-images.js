import unescape from './unescape';

const regex = /(?:https?:\/\/)(?:[-a-zA-Z0-9@:%_\+~#=]+\.)+[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&;\/\/=()]*)(?:\.gif|\.png|\.jpg|\.jpeg)/gi;

export default function addInlineImages(message) {
  var all_links = new Set();
  do {
    var link = regex.exec(message);
    if ( link ) {
      all_links.add(link[0]);
    }
  } while(link);
  all_links.forEach(function(link) {
    message += `<br /><img class="inline-media" src="${link}"/>`
  });
  return message;
}
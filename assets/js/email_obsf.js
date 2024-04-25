// [AVIRAM] Email obfsucation
// Taken from: https://felixdmr.com/2019/03/09/email-obfus/

// Jquery functions here
$(document).ready(function(){
  // jquery apparently likes to lie in here. 
  // makes sure document is fully loaded before triggering anything
  
  // load the obfsucation keys
  var email_key_href = JSON.parse("[37,14,31,9,6,79,78,8,89,30,0,54,2,12,13,105,108,46,99,111,109]"); // "Hover to reveal"
  var email_key_text = JSON.parse("[47,22,26,0,50,89,27,8,73,21,28,26,0,79,15,111,109]");             // "Hover to reveal"
  var email_encoded = true;

  var tel_key_href = JSON.parse("[60,10,26,95,89,25,67,93,21,74,82,78,83,89,88,50,50]"); // "Hover to reveal"
  var tel_key_text = JSON.parse("[96,68,79,82,64,9,84,90,24,95,82,78,83,76,84,52,50,50]"); // "Hover to reveal"
  var tel_encoded = true;
  

  // If email address is hovered, decode it and show to user
  $("#email_obsf").hover(function() {
    if (email_encoded) {
      email_encoded = decodeContact("#email_obsf", email_key_href, email_key_text)
    }
  });
  // if tel number is hovered, decode it and show to user
  $("#tel_obsf").hover(function() {
    if (tel_encoded) {
      tel_encoded = decodeContact("#tel_obsf", tel_key_href, tel_key_text)
    }
  });
  });


// functions for decoding the email
function decodeContact(obsf_id, key_href, key_text) {
  // read the ciphered and convert to number
  var a_num_href = convert2num($(obsf_id).attr('href'));
  var a_num_text = convert2num($(obsf_id).text());
  // XOR with key and convert back to string
  var decoded_href = convert2str(XOR(a_num_href, key_href));
  var decoded_text = convert2str(XOR(a_num_text, key_text));
  // set as the herf of the links
  $(obsf_id).attr('href', decoded_href);
  $(obsf_id).text(decoded_text);

  return false
}

function XOR(a_num, b_num) {
   var c_num = new Array(Math.max(a_num.length,b_num.length));
  for (var i = 0; i < Math.max(a_num.length,b_num.length); i++){
    c_num[i] = a_num[i] ^ b_num[i];
  }

  return c_num
}

function convert2num(a) {
  var a_num = new Array(a.length);
  for (var i = 0; i < a.length; i++ ) {
    a_num[i] = a.charCodeAt(i);
  }

  return a_num
}

function convert2str(a_num) {
  var a = String.fromCharCode.apply(null, a_num);
  return a

}

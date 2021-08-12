function truncate(str, maxlength) {
if (str.length > maxlength)
return String(str.substring(0, --maxlength)) + '…'
else
return str
}

module.exports = (function() {
  var counter = 0;
  return {increment: function() {
    counter++;
    return this;
  },
    getValue: function() {
      return counter;
    }
  };
});

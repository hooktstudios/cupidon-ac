function SelectWithAC($node, options){
  this.$node = $node;
  this.settings = $.extend({
    changeText: 'Edit'
  }, options)
}

SelectWithAC.prototype = {
  init: function(){
    var self = this;

    // Set up the hidden input
    this._$hidden = $('<input>', {
      type: 'hidden',
      name: this.$node.attr('name'),
    });

    this.$node.removeAttr('name');
    this.$node.after(this._$hidden)

    // Set up the display container
    this.init_displayer();

    this._$displayer.find('a').bind('click', function(e){
      e.preventDefault();
      self.set(null, null);
    });

    this.set(this.$node.val(), this.$node.data('ac-display'));

    this.$node.autocomplete({
      source: this.$node.data('ac-url'),
      select: function(event, ui){ return self.ac_select($(this), event, ui); },
      change: self.ac_change,
    });
  },

  init_displayer: function(){
    var displayer = this.settings.displayer;

    if(displayer instanceof jQuery || displayer && displayer.nodeType == 1) {
      this._$displayer = this.$node.siblings().filter(displayer);
    }
    else if(({}).toString.call(displayer) == "[object Function]") {
      this._$displayer = $(displayer.call());
    }
    else {
      this._$displayer = $('<div class="ac-display"><p></p><a href="#">' + this.settings.changeText + '</a></div>');
      this._$hidden.after(this._$displayer);
    }
  },

  ac_select: function($node, event, ui){
    this.set(ui.item.value, ui.item.label);
    return false;
  },

  set: function(value, label){
    if(!value) value = '';
    if(!label) label = '';
    this.$node.val(label);
    this._$displayer.find('p').html(label);
    this._$hidden.val(value);
    if(value && label) {
      this.$node.hide();
      this._$displayer.show();
    }
    else {
      this.$node.show();
      this._$displayer.hide();
    }
  },

  // this refers to the autcompleter element here.
  ac_change: function(event, ui){
    // @todo : improve later : autodetect text and set proper value
    var $this = $(this);
    $this.val("");
    $this.data('autocomplete').term = "";
    return false;
  },
}

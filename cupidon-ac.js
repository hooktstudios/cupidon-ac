(function ($) {
  "use strict";

  $.widget("ui.cupidon", $.ui.autocomplete, {
    options: {
      changeText: 'Edit',
      token: '<div class="ac-token"><p></p><a class="edit" href="#"></a></div>'
    },

    _create: function () {
      var self = this;

      this._setOption('select', this.options.select);

      this.options.token = $(this.options.token).
        find('.edit').
          bind('click', function (event) {self._edit.apply(self, [event]);}).
          html(this.options.changeText).
          end().
        hide().
        insertAfter(this.element);

      $.ui.autocomplete.prototype._create.apply(this);
    },

    _init: function () {
      var token = this.element.data('ac-token'),
          value = this.element.val();

      if (value && token) {
        this._label(token);
      } else {
        this._reset();
      }

      $.ui.autocomplete.prototype._init.call(this);
    },

    _edit: function (event) {
      event.preventDefault();
      this._reset();
    },

    _label: function (label) {
      this.element.wrap('<span style="display: none;"></span>');
      this.options.token.show();
      this.options.token.find('p').html(label);
    },

    _ourSelectAndTheirSelect: function (theirSelect) {
      var self = this;

      return function (event, ui) {
        var ourCall = self._select.apply(self, [event, ui]),
            theirCall;

        if (theirSelect && typeof theirSelect === 'function') {
          theirCall = theirSelect.call();
        } else {
          theirCall = true;
        }

        return ourCall !== false && theirCall !== false;
      };
    },

    _select: function (event, ui) {
      this.element.val(ui.item.value);
      this._label(ui.item.label);
    },

    _setOption: function (key, value) {
      switch(key) {
        case 'select':
          value = this._ourSelectAndTheirSelect(value);
          break;
      }
      $.ui.autocomplete.prototype._setOption.apply(this, [key, value]);
    },

    _reset: function () {
      this._unwrap();
      this.options.token.hide();
      this.element.val('');
      this.element.removeAttr('data-token');
    },

    _unwrap: function () {
      if(this.options.token.is(':visible')) this.element.unwrap();
    },

    destroy: function () {
      this._unwrap();
      this.options.token.remove();
      $.ui.autocomplete.prototype.destroy.call(this);
    }
  });
}(jQuery));

(function ($) {
  "use strict";

  $.widget("ui.cupidon", $.ui.autocomplete, {
    options: {
      changeText: 'Edit',
      token: '<div class="ac-token"><p></p><a class="edit" href="#"></a></div>'
    },

    _create: function () {
      var that = this;

      this._setOption('select', this.options.select);

      this.options.token = $(this.options.token).
        find('.edit').
          bind('click', function (event) {that._edit.apply(that, [event]);}).
          html(this.options.changeText).
          end().
        hide().
        insertAfter(this.element);

      $.ui.autocomplete.prototype._create.apply(this);
    },

    _init: function () {
      var token = this.element.data('ac-token'),
        value = this.element.val();

      if (value !== '' && token && token !== '') {
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
      var that = this;

      return function (event, ui) {
        var ourCall = that._select.apply(that, [event, ui]),
          theirCall;

        if (theirSelect && typeof theirSelect === 'function') {
          theirCall = theirSelect.call();
        } else {
          theirCall = true;
        }

        return ourCall && theirCall;
      };
    },

    _select: function (event, ui) {
      this.element.val(ui.item.value);
      this._label(ui.item.label);
    },

    _setOption: function (key, value) {
      switch(key) {
        case 'select':
          this.options.select = this._ourSelectAndTheirSelect(value);
          break;
        default:
          return $.ui.autocomplete.prototype._setOption.apply(this, [key, value]);
      }
    },

    _reset: function () {
      this.options.token.hide();
      this.element.val('');
      this.element.removeAttr('data-token');
      this.element.unwrap();
    },

    destroy: function () {
      this.element.unwrap();
      this.options.token.remove();
      $.ui.autocomplete.prototype.destroy.call(this);
    }
  });
}(jQuery));

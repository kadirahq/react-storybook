'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _from = require('babel-runtime/core-js/array/from');

var _from2 = _interopRequireDefault(_from);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _with_state = require('./with_state');

var _with_state2 = _interopRequireDefault(_with_state);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientApi = function () {
  function ClientApi(_ref) {
    var syncedStore = _ref.syncedStore;
    var storyStore = _ref.storyStore;
    (0, _classCallCheck3.default)(this, ClientApi);

    this._syncedStore = syncedStore;
    this._storyStore = storyStore;
  }

  (0, _createClass3.default)(ClientApi, [{
    key: 'storiesOf',
    value: function storiesOf(kind, m) {
      var _this = this;

      if (m && m.hot) {
        m.hot.dispose(function () {
          _this._storyStore.removeStoryKind(kind);
        });
      }

      var add = function add(storyName, fn) {
        _this._storyStore.addStory(kind, storyName, fn);
        return { add: add };
      };

      return { add: add };
    }
  }, {
    key: 'action',
    value: function action(name) {
      var syncedStore = this._syncedStore;

      return function () {
        for (var _len = arguments.length, _args = Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        var args = (0, _from2.default)(_args);

        var _syncedStore$getData = syncedStore.getData();

        var _syncedStore$getData$ = _syncedStore$getData.actions;
        var actions = _syncedStore$getData$ === undefined ? [] : _syncedStore$getData$;

        // Remove events from the args. Otherwise, it creates a huge JSON string.

        if (args[0] && args[0].constructor && /Synthetic/.test(args[0].constructor.name)) {
          args[0] = '[' + args[0].constructor.name + ']';
        }

        actions = [{ name: name, args: args }].concat(actions.slice(0, 4));
        syncedStore.setData({ actions: actions });
      };
    }
  }, {
    key: 'withState',
    value: function withState(handlers, renderChildren) {
      return React.createElement(
        _with_state2.default,
        { handlers: handlers },
        renderChildren()
      );
    }
  }]);
  return ClientApi;
}();

exports.default = ClientApi;


ClientApi.WithState = _with_state2.default;
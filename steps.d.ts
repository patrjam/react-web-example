/// <reference types='codeceptjs' />
type steps_file = typeof import('jsqa/steps_file.js');
type DataClientHelper = import('jsqa/helpers/dataClientHelper.js');
type WebDriverHelper = import('jsqa/helpers/webDriverHelper.js');
type RESTClientHelper = import('jsqa/helpers/RESTClientHelper.js');
type AssertWrapper = import('codeceptjs-assert');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I }
  interface CallbackOrder { [0]: CodeceptJS.I }
  interface Methods extends CodeceptJS.WebDriver, DataClientHelper, WebDriverHelper, RESTClientHelper, AssertWrapper {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}

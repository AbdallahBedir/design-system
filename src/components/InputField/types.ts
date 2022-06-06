enum ControlType {
  INPUT = 'input',
  TEXT_AREA = 'text_area',
  TITLE = 'title',
  DATERANGE = 'date_range',
  DATETIME = 'date_time',
  COLLECTION = 'collection',
  UPLOAD = 'file_uploader',
  SWITCH = 'toggle_switch',
  RANGE = 'RANGE',
  RICHTEXTAREA = 'RICHTEXTAREA',
  STEPPER = 'stepper',
  PHOTO_UPLOAD = 'photo_upload',
  OUTPUT = 'output',
}

enum InputType {
  'TEXT' = 'text',
  'NUMBER' = 'number',
  'CURRENCY' = 'currency',
  'EMAIL' = 'email',
  'PASSWORD' = 'password',
  'DATEONLY' = 'dateOnly',
  'TIMEONLY' = 'timeonly',
  'DATETIME' = 'dateTime',
  'BUTTON' = 'button',
  'SUBMIT' = 'submit',
}

interface ControlBase {
  id: string;
  label: string;
  placeholder: string;
  validations: Array<string>;
  requestType: 'SingleValueRequest' | 'MultiValueRequest' | 'RangeRequest' | 'FileRequest';
  componentType: ControlType;
  enabled: true | false;
  tip?: string;
  richTip?: string;
  events?: {
    onExactValue: {
      values: Array<string | number | boolean>;
      eventHandler: {
        componentIdEnabler: Array<string>;
      };
    };
  };
  required?: boolean;
  type?: string;
  linkedTo?: string;
}

interface InputControlBase extends ControlBase {
  type: InputType;
  action?: string;
  linkedTo?: string;
  /**
   * Left-side addon to the input field. For the design check the ticket: https://peopleflw.atlassian.net/browse/PLAT-848
   */
  inputAddon?: string;
}

export { InputControlBase };

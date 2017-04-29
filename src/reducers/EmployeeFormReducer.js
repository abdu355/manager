import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEE_SAVE_SUCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '' //by default shift is empty- picker does not select default value
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { prop: 'name', value: 'jane' }
      return { ...state, [action.payload.prop]: action.payload.value };
      //key interpolation [] can take any prop ex: name or phone
      //name: action.payload.value
    case EMPLOYEE_CREATE:
      return INITIAL_STATE; //reset form
    case EMPLOYEE_SAVE_SUCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};

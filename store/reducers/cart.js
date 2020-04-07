import {ADD_TO_CART, CHECKED, MINUS, PLUS} from '../actions/cart';

const initialState = {
  MenuData: [
    [
      {
        id: '0',
        minTitle: 'حدد الحجم',
        title: 'صعير',
        price: 50,
        checked: false,
        quantity: 0,
      },
      {id: '1', title: 'متوسط', price: 75, checked: false},
      {id: '2', title: 'كبير', price: 100, checked: false, quantity: 0},
      {id: '3', title: 'وجبة كومبو', price: 110, checked: false, quantity: 0},
    ],
    [
      {
        id: 4,
        minTitle: 'اضف مشروب',
        title: 'بيبسي',
        price: 2.5,
        checked: false,
        quantity: 0,
      },
      {id: 5, title: 'كوكاكولا', price: 2.5, checked: false, quantity: 0},
      {id: 6, title: 'سفن اب', price: 2.5, checked: false, quantity: 0},
    ],
    [
      {
        id: 7,
        minTitle: 'اضافات',
        title: 'سلطة خضراء',
        price: 10,
        checked: false,
        quantity: 0,
      },
      {id: 8, title: 'سلطة ملفوف', price: 7, checked: false, quantity: 0},
      {id: 9, title: 'حمص', price: 5, checked: false, quantity: 0},
    ],
    [
      {id: 10, minTitle: 'بدون', title: 'بصل', checked: false},
      {id: 11, title: 'خس', checked: false},
      {id: 12, title: 'جبنة', checked: false},
    ],
  ],
  totalAmount: 0,
  cartData: [],
};
export default (state = initialState, action) => {
  switch (action.type) {
    // case CHECKED:
    //   return {
    //     ...state,
    //     [action.id]: state.MenuData.map(sections => {
    //       sections.filter(item => item.id == action.id);
    //     }),
    //   };
    // case PLUS:
    //   return Object.assign({}, state, {
    //     MenuData: state.MenuData.map((item, index) => {
    //       if (index === action.id) {
    //         return Object.assign({}, item, {
    //           quantity: ++item.quantity,
    //         });
    //       }
    //       return item;
    //     }),
    //   });
    // case MINUS:
    //   return Object.assign({}, state, {
    //     MenuData: state.MenuData.map((item, index) => {
    //       if (index === action.id) {
    //         return Object.assign({}, item, {
    //           quantity: item.quantity > 0 && --item.quantity,
    //         });
    //       }
    //       return item;
    //     }),
    //   });

    case ADD_TO_CART:
      return {
        ...state,
        cartData: [
          {
            image: 'https://i.imgur.com/607VVTO.png',
            id: '1',
            title: 'برجر الآنجوس',
            description: 'متوسط',
            price: 75,
          },
          {
            image: 'https://i.imgur.com/FtGfqOx.png',
            id: '2',
            title: 'سفن اب',
            price: 3,
          },
        ],
      };
  }
  return state;
};

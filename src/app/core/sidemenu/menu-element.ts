export const menus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': false,
        'open': false,
        'chip': { 'value': 1, 'color': 'accent' },
        'sub': [
            {
                'name': 'Dashboard',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            }
        ]
    },
    {
        'name': 'Material Widget',
        'icon': 'widgets',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Buttons',
                'link': 'material-widgets/buttons',
                'icon': 'indeterminate_check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'List',
                'link': 'material-widgets/list',
                'icon': 'list',
                'chip': false,
                'open': false,
            },
            {

                'name': 'Stepper',
                'link': 'material-widgets/stepper',
                'icon': 'view_week',
                'chip': false,
                'open': false,

            },
            {
                'name': 'Expansion',
                'link': 'material-widgets/expansion',
                'icon': 'web_aaset',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Progress Spinner',
                'link': 'material-widgets/spinner',
                'icon': 'cached',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Cards',
                'link': 'material-widgets/cards',
                'icon': 'crop_16_9',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Icons',
                'link': 'material-widgets/icons',
                'icon': 'gif',
                'chip': false,
                'open': false,
            },
            {

                'name': 'AutoComplete',
                'link': 'material-widgets/autocomplete',
                'icon': 'get_app',
                'chip': false,
                'open': false,
            },
            {
                'name': 'CheckBox',
                'link': 'material-widgets/checkbox',
                'icon': 'check_box',
                'chip': false,
                'open': false,
            },
            {
                'name': 'DatePicker',
                'link': 'material-widgets/datepicker',
                'icon': 'date_range',
                'chip': false,
                'open': false,
            },

            {
                'name': 'Slider',
                'link': 'material-widgets/slider',
                'icon': 'keyboard_tab',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Slide Toggle',
                'link': 'material-widgets/slide-toggle',
                'icon': 'album',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Menu',
                'icon': 'menu',
                'link': 'material-widgets/menu',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Progress Bar',
                'link': 'material-widgets/progress-bar',
                'icon': 'trending_flat',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Input',
                'icon': 'input',
                'link': 'material-widgets/input',
                'open': false,
            },
            {
                'name': 'Radio',
                'icon': 'radio_button_checked',
                'link': 'material-widgets/radio',
                'chip': false,
                'open': false,
            },
            {
                'name': 'Select',
                'icon': 'select_all',
                'link': 'material-widgets/select',
                'open': false,
            },
        ]
    },
    // {
    //     'name'   : 'Forms',
    //     'icon'   : 'mode_edit',
    //     'open'   : false,
    //     'link'   : false,
    //     'sub'    :  [
    //                     {
    //                         'name': 'Template Driven',
    //                         'icon': 'mode_edit',
    //                         'open'   : false,
    //                         'link':'forms/template_forms'
    //                     },
    //                     {
    //                         'name': 'Reactive Forms',
    //                         'icon': 'text_fields',
    //                         'open'   : false,
    //                         'link':'forms/reactive_forms'
    //                     }
    //                 ]
    // },

    {
        'name': 'Guarded Routes',
        'icon': 'mode_edit',
        'link': '/auth/guarded-routes',
        'open': false,
    }
    , {
        'name': 'Pages',
        'icon': 'content_copy',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'Login',
                'icon': 'work',
                'open': false,
                'link': '../login',
            }, {
                'name': 'Services',
                'icon': 'local_laundry_service',
                'open': false,
                'link': 'pages/services',
            }, {
                'name': 'Contact',
                'icon': 'directions',
                'open': false,
                'link': 'pages/contact'
            }
        ]
    }
    ,
    {
      'name': 'Restaurant',
      'icon': 'widgets',
      'link': false,
      'open': false,
      'sub': [
          {
              'name': 'Mesa',
              'link': 'restaurant/mesa',
              'icon': 'indeterminate_check_box',
              'chip': false,
              'open': false,
          },
          {
            'name': 'Plato',
            'link': 'restaurant/plato',
            'icon': 'indeterminate_check_box',
            'chip': false,
            'open': false,
        },
        {
          'name': 'Categorias',
          'link': 'restaurant/categoria',
          'icon': 'indeterminate_check_box',
          'chip': false,
          'open': false,
        },
        {
          'name': 'Roles',
          'link': 'restaurant/rol',
          'icon': 'indeterminate_check_box',
          'chip': false,
          'open': false,
        },
        {
          'name': 'Empleados',
          'link': 'restaurant/empleado',
          'icon': 'indeterminate_check_box',
          'chip': false,
          'open': false,
        },
        {
          'name': 'Mesa Crud',
          'link': 'restaurant/mesaCrud',
          'icon': 'indeterminate_check_box',
          'chip': false,
          'open': false,
        },
        {
          'name': 'Carta',
          'link': 'restaurant/carta',
          'icon': 'indeterminate_check_box',
          'chip': false,
          'open': false,
        },
        {
          'name': 'Lista Menu',
          'link': 'restaurant/listaMenu',
          'icon': 'indeterminate_check_box',
          'chip': false,
          'open': false,
        },

        {
          'name': 'Menu s/ 7',
          'link': 'restaurant/menu1',
          'icon': 'indeterminate_check_box',
          'chip': false,
          'open': false,
        },

        {
          'name': 'Menu s/ 8',
          'link': 'restaurant/menu2',
          'icon': 'indeterminate_check_box',
          'chip': false,
          'open': false,
        },
         {
          'name': 'Login Mozo',
          'link': 'restaurant/loginMozo',
          'icon': 'indeterminate_check_box',
          'chip': false,
          'open': false,
        }
      ]
  },
];

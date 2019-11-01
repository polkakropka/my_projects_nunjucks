import Pikaday from 'pikaday';
export default class Datepicker {

        static init() {

            let dateFields = document.querySelectorAll('.datepicker');

            let picker = [];

            for(let i = 0; i < dateFields.length ; i++) {
                picker.push (new Pikaday({
                    field: dateFields[i],
                    yearRange: [1900, 2050],
                    i18n: {
                        previousMonth: 'Vorheriger Monat',
                        nextMonth    : 'Nächster Monat',
                        months       : ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
                        weekdays     : ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
                        weekdaysShort: ['So','Mo','Di','Mi','Do','Fr','Sa']
                    },
                    toString(date, format) {
                        const day = date.getDate();
                        const month = date.getMonth() + 1;
                        const year = date.getFullYear();
                        return `${day}.${month}.${year}`;
                    }
                }));
            }


            let startElements = document.querySelectorAll('.datepicker-start');
            let endElements= document.querySelectorAll('.datepicker-end');

            let pickerStart = [];
            let pickerEnd = [];

            for(let i = 0; i < startElements.length ; i++) {
                pickerStart.push(new Pikaday({
                    field: startElements[i],
                    minDate: new Date(),
                    i18n: {
                        previousMonth: 'Vorheriger Monat',
                        nextMonth    : 'Nächster Monat',
                        months       : ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
                        weekdays     : ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
                        weekdaysShort: ['So','Mo','Di','Mi','Do','Fr','Sa']
                    },
                    toString(date, format) {
                        const day = date.getDate();
                        const month = date.getMonth() + 1;
                        const year = date.getFullYear();
                        return `${day}.${month}.${year}`;
                    }
                }));

                startElements[i] ? startElements[i].addEventListener('change', () => {
                    let dateArray = startElements[i].value.split('.');
                    let startDate = new Date (parseInt(dateArray[2]), parseInt(dateArray[1]) - 1, parseInt(dateArray[0]) + 1);

                    endElements[i].value = '';
                    endElements[i].disabled = false;

                    pickerEnd.push(new Pikaday({
                        field: endElements[i],
                        minDate: startDate,
                        i18n: {
                            previousMonth: 'Vorheriger Monat',
                            nextMonth    : 'Nächster Monat',
                            months       : ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
                            weekdays     : ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
                            weekdaysShort: ['So','Mo','Di','Mi','Do','Fr','Sa']
                        },
                        toString(date, format) {
                            const day = date.getDate();
                            const month = date.getMonth() + 1;
                            const year = date.getFullYear();
                            return `${day}.${month}.${year}`;
                        }
                    }));
                }) : null
            }
        }
    }


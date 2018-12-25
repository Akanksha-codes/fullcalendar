import { expectActiveRange } from './ViewDateUtils'

/*
SEE ALSO: next/prev
*/
fdescribe('dateAlignment', function() {

  describe('when week alignment', function() {
    pushOptions({
      defaultView: 'agenda',
      dateAlignment: 'week',
      defaultDate: '2017-06-15'
    })

    describe('when 3 day duration', function() {
      pushOptions({
        duration: { days: 3 }
      })

      it('aligns with the week', function() {
        initCalendar()
        expectActiveRange('2017-06-11', '2017-06-14')
      })
    })

    describe('when 5 day count', function() {
      pushOptions({
        dayCount: 5,
        weekends: false
      })

      it('aligns with first visible day of the week', function() {
        initCalendar()
        expectActiveRange('2017-06-12', '2017-06-17')
      })
    })
  })

  // test in Safari!
  // https://github.com/fullcalendar/fullcalendar/issues/4363
  describe('when year alignment', function() {
    pushOptions({
      defaultView: 'basic',
      duration: { months: 1 },
      dateAlignment: 'year',
      defaultDate: '2017-06-15'
    })

    it('aligns with first day of year', function() {
      initCalendar()
      expectActiveRange('2017-01-01', '2017-02-05')
    })
  })
})

$(document).ready(function () {
        var currentFloor = 2 // хранение текущего этажа
        var floorPath = $('.home-image path') // каждый отдельный этаж в svg
        var counterUp = $('.counter-up')
        var counterDown = $('.counter-down')
        var modal = $('.modal')
        var modalCloseButton = $('.modal-close-button')
        var viewFlatsButton = $('.view-flats') 
        


            floorPath.on('mouseover', function() { //добавление подсветки при наведении
            floorPath.removeClass('current-floor')//удаляем активный класс
            currentFloor = $(this).attr('data-floor') // значение текущего этажа
            $('.counter').text(currentFloor) // записываем значение текущего этажа в счетчик
    })

        floorPath.on('click', toggleModal) // открыть окно

        modalCloseButton.on('click', toggleModal) // закрыть окно
        viewFlatsButton.on('click', toggleModal)
        





    counterUp.on('click', function(){ // добавление подсветки при клике
       if(currentFloor < 18){
            currentFloor++
            usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})
            $('.counter').text(usCurrentFloor)
            floorPath.removeClass('current-floor')
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor') // подсвечиваем текущий этаж
       } 

    })



    // кнопка вниз
    counterDown.on('click', function(){
        if (currentFloor > 2){ //условие при котором ниже 2 этажа счет не идет
            currentFloor--
            unCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false}) //форматирование строки с добавлением 0
            $('.counter').text(unCurrentFloor) //добавление к счетчику значения
            floorPath.removeClass('current-floor') //удаляем за собой подсветку после каждого пройденного этажа
            $(`[data-floor=${unCurrentFloor}]`).toggleClass('current-floor')
        }
        
    })

    function toggleModal(){  //функция октрыть закрыть окно
        modal.toggleClass('is-open');

    }


    ///// доп
    var currentFlats = 1 // текущая квартира
    var flatsPath = $('.flats-image path') // квартиры в целом
    var flatsPathItem = $('.flat-item a') // характеристики квартир
    flatsPath.on('mouseover', function(){ // функция отвечает за наведение на квартиру, когда наводишь на квартиру и подсвечивается характеристика
        currentFlats = $(this).attr('data-flats') //запись текущего значения в переменную
        flatsPath.removeClass('current-flats')// удаляем  класс квартир 
        $(`[data-flats=${currentFlats}]`).toggleClass('current-flats') // добавляем класс квартиры
        $(`[data-item=${currentFlats}]`).toggleClass('current-flats-item') // добавляем характеристику квартиры
    })

    flatsPathItem.on('mouseover', function(){ // эта функия отвечает за наведение на характеристику и подсветку самой квартиры и характеристики
        currentFlats = $(this).attr('data-item')
        flatsPath.removeClass('current-flats-item') // удаляет класс
        $(`[data-flats${currentFlats}]`).toggleClass('current-flats') // доавбляет класс квартиры
        $(`[data-flats-item${currentFlats}]`).toggleClass('current-flats-item') // добавлет класс характеристики
    })

});
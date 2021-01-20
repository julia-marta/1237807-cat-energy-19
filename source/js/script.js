// menu mobile

const navigation = document.querySelector(".site-navigation");
const menuToggle = document.querySelector(".site-navigation__toggle");

navigation.classList.remove("site-navigation--nojs");

const menuToggleClickHandler = function () {
  if (navigation.classList.contains("site-navigation--closed")) {
    navigation.classList.remove("site-navigation--closed");
    navigation.classList.add("site-navigation--opened");
  } else {
    navigation.classList.add("site-navigation--closed");
    navigation.classList.remove("site-navigation--opened");
  }
}

if (menuToggle) {
  menuToggle.addEventListener("click", menuToggleClickHandler);
}

// slider toggle

const sliderToggle = document.querySelector(".slider__toggle");
const range = document.querySelector(".slider__range");
const beforePhoto = document.querySelector(".slider__image--before");

const toggleMouseDownHandler = function (evt) {
  evt.preventDefault();
  let startCoord = evt.clientX;

  const onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();

    let shift = startCoord - moveEvt.clientX;
    startCoord = moveEvt.clientX;

    const toggleCoord = sliderToggle.offsetLeft - shift;
    const photoWidth = beforePhoto.offsetWidth - shift;

    if (toggleCoord >= 0 && toggleCoord <= range.offsetWidth) {
      sliderToggle.style.left = toggleCoord + 'px';
      beforePhoto.style.width = photoWidth + 'px';
    }
  };

  const onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
};

if (sliderToggle) {
  sliderToggle.addEventListener('mousedown', toggleMouseDownHandler);
}

const automatic_image_caraousel_container = document.querySelector(".automatic-image-caraousel-container");
const all_images_slidesbox = document.querySelectorAll(".image-slidesbox");
let current_image_index = 0;

setInterval(() => {
  update_images_location();
}, 3000);

function update_images_location() {
  current_image_index++;
// ==================================== increment current image index after every 3 seconds ====================================
  change_images();
}
function change_images() {
  if (current_image_index > all_images_slidesbox.length - 1) {
      // ============================== if reached the end of the slider container show first slide ==============================
      current_image_index = 0;
      // ========================== if not reached the end of the slider container then show next slide ==========================
    } else if (current_image_index < 0) {
    current_image_index = all_images_slidesbox.length - 1;
  }
  automatic_image_caraousel_container.style.transform = `translateX(-${current_image_index * 100}%)`;
}

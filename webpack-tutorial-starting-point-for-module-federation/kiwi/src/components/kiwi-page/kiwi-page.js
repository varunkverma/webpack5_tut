import Heading from "../heading/heading.js";
import KiwiImage from "../kiwi-image/kiwi-image.js";

function KiwiPage() {
  const heading = new Heading();
  heading.render("kiwi");
  const kiwiImage = new KiwiImage();
  kiwiImage.render();
}

export default KiwiPage;

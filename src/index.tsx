import { registerComponent } from "forsteri"

import Card, { state, props } from "./card"

registerComponent({
    component: "forsteri-card",
    view: Card,
    state,
    props
})

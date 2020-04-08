import { h, ForsteriComponent } from "forsteri"

export const state = { isShowing: false, data: "a" },
    props = ["title", "cover"],
    Card: ForsteriComponent<typeof state, typeof props> = (
        { state: { isShowing, data }, set, on },
        { title, cover }
    ) => {
        on(['data'], (newState) => {
            console.log(newState)
        })

        return (
            <fragment>
                <link rel="stylesheet" href="/components/card.css" />
                <main id="card" tabindex="0">
                    <img id="cover" src={cover} alt="Azur Lane" />
                    <section id="body">
                        <header id="header">
                            <h1 id="title">{title}</h1>
                            <button
                                id="toggle"
                                onClick={() => {
                                    set("isShowing", !isShowing)
                                }}
                            >
                                +
                            </button>
                        </header>
                        {isShowing ? (
                            <section id="detail">
                                <children />
                            </section>
                        ) : (
                            <fragment />
                        )}
                    </section>
                </main>
            </fragment>
        )
    }

export default Card

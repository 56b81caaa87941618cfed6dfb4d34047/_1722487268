/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722489559", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 flex-1 p-8">
        <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 backdrop-blur-lg bg-white/10 rounded-2xl shadow-lg">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-4 text-4xl font-bold leading-tight tracking-tight text-white">Get Fit, Stay Motivated</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-6 text-lg font-medium text-pink-100">Our app makes tracking your workouts and nutrition easy, keeping you on track to reach your fitness goals.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-blue-900 bg-gradient-to-r from-pink-300 to-purple-400 hover:from-pink-400 hover:to-purple-500 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-lg px-8 py-3 transition-all duration-300 ease-in-out transform hover:scale-105">Start Your Journey</a>
                </div>
            </div>
        </div>
    </section>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

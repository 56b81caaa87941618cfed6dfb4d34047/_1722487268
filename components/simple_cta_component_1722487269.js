/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722487269", {
    template: `
    <section id="cta-component" class="bg-gradient-to-br from-pink-400 via-purple-500 to-blue-800 flex-1 min-h-screen flex items-center justify-center">
        <div id="cta-inner-container" class="max-w-screen-xl px-8 py-16 mx-auto lg:py-24 lg:px-10">
            <div id="cta-content" class="max-w-screen-sm mx-auto text-center backdrop-blur-xl bg-white bg-opacity-20 rounded-3xl shadow-2xl p-10 border border-white border-opacity-30">
                <div id="cta-title-container" class="flex">
                    <h2 id="cta-title" class="flex-1 mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white text-opacity-90 font-futuristic">Get Fit, Stay Motivated</h2>
                </div>

                <div id="cta-subtitle-container" class="flex">
                    <p id="cta-subtitle" class="flex-1 mb-8 font-medium text-white text-opacity-90 text-lg">Our app makes tracking your workouts and nutrition easy, keeping you on track to reach your fitness goals.</p>
                </div>
                
                <div id="cta-button-container" class="flex">
                    <a id="cta-button" href="#" class="flex-1 text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 focus:ring-4 focus:ring-purple-300 font-bold rounded-full text-lg px-10 py-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none shadow-lg backdrop-blur-md bg-opacity-70">Start Your Journey</a>
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

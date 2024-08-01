/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722487269", {
    template: `
    <footer id="footer-section" style="min-height: 390px"   class="flex-1 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-800">
            <div id="footer-container" class="max-w-screen-xl p-8 py-10 mx-auto lg:py-16 md:p-12 lg:p-14 backdrop-blur-xl bg-white bg-opacity-10 rounded-2xl shadow-2xl border border-white border-opacity-20">
                <hr id="footer-divider" class="my-8 border-purple-300 opacity-30 sm:mx-auto lg:my-10">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">
                            <img id="footer-logo" src="https://makeinfinite-mentat-test.azurewebsites.net/get_image/tmp47pq2vth/logo.svg" class="h-10 mr-4 sm:h-12 filter drop-shadow-lg" alt="Landwind Logo" />
                            FitHub: Your Gym Companions
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-xl text-center text-white font-medium tracking-wide">
                        Stay motivated, stay healthy. FitHub is here to power your fitness journey every step of the way.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});

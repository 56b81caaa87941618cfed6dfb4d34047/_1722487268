/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722487269", {
    template: `
    <footer id="footer-section" style="min-height: 390px" class="flex-1 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-800">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10 bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg rounded-lg shadow-lg">
                <hr id="footer-divider" class="my-6 border-white border-opacity-30 sm:mx-auto lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-3xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-3 sm:h-10" alt="Landwind Logo" />
                            FitHub: Your Gym Companions
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-white">
                        Stay motivated, stay healthy. FitHub is here to power your fitness journey every step of the way.
                        Stay motivated, stay healthy. FitHub is here to power your fitness journey every step of the way.
                        <button class="mt-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
                            Guy
                        </button>
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

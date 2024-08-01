/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722487269", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-br from-pink-400 via-purple-500 to-blue-800 min-h-[390px]">
            <div id="footer-container" class="max-w-screen-xl mx-auto p-10 bg-opacity-20 bg-white backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl border border-opacity-30 border-white">
                <hr id="footer-divider" class="my-8 border-white border-opacity-30">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 hover:from-pink-400 hover:to-blue-400 transition-all duration-300">
                            <img id="footer-logo" src="./images/logo.svg" class="h-12 mr-4 filter drop-shadow-lg" alt="Landwind Logo" />
                            FitHub: Your Gym Companions
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-xl text-center text-white font-semibold leading-relaxed">
                        Stay motivated, stay healthy. FitHub is here to power your fitness journey every step of the way.
                        Stay motivated, stay healthy. FitHub is here to power your fitness journey every step of the way.
                        <button class="mt-8 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl backdrop-filter backdrop-blur-sm bg-opacity-70">
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

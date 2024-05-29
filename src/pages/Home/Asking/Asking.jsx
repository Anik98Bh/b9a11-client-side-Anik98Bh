
const Asking = () => {
    return (
        <div className="mb-10 mt-16 px-60">
            <h2 className="text-center text-3xl my-5 font-acma underline">Frequently Asked Questions ?</h2>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What is a Alternative good?
                </div>
                <div className="collapse-content">
                    <p>Alternative goods is a product that serves a similar purpose and can be used as replacements for the original product.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Are alternative modes of transport substitute goods?
                </div>
                <div className="collapse-content">
                    <p>Yes, alternative modes of transport can be considered substitute goods as they serve a similar function and can be used interchangeably to meet the same need of transportation.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How does a price change of substitute goods affect demand?
                </div>
                <div className="collapse-content">
                    <p>As the price of one substitute good increases, the demand for the other substitute goods will increase as consumers switch to the relatively more affordable option.</p>
                </div>
            </div>
        </div>
    );
};

export default Asking;
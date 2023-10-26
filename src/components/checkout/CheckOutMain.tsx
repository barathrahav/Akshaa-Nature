"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import NiceSelectTwo from "@/utils/NiceSelectTwo";
import { countryes } from "@/data/nice-select-data";
interface FormData {
  Country: string;
  Fname: string;
  Lname: string;
  Address: string;
  City: string;
  Postcode: string;
  EmailAddress: string;
  Phone: string;
}

const CheckOutMain = () => {
  const router = useRouter();
  const [country, setcountry] = useState<string>("");
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );

  const totalPrice = cartProducts.reduce(
    (total, product) => total + (product.price ?? 0) * (product.totalCard ?? 0),
    0
  );
  const handleGoToShopPage = () => {
    router.push("/shop");
  };

  const hanleLogin = () =>{
    router.push("/login")
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const Country = country;
    const Fname = data.Fname;
    const Address = data.Address;
    const City = data.City;
    const Postcode = data.Postcode;
    const EmailAddress = data.EmailAddress;
    const Phone = data.Phone;
    // add payment method intent here
  };

  const selectHandler = () => {};

  return (
    <>
      <section className="checkout-area pt-115 pb-100">
        <div className="container small-container">
          <div className="coupon-accordion">
            <h3>
              Returning customer?{" "}
              <span id="showlogin" onClick={hanleLogin}>Click here to login</span>
            </h3>
            <div id="checkout-login" className={`coupon-content d-block`}>
              <div className="coupon-info">
                <p className="coupon-text">
                  Quisque gravida turpis sit amet nulla posuere lacinia. Cras
                  sed est sit amet ipsum luctus.
                </p>
                {/* login form will show if user not login - login component is ready check folders  */}
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              {/* billing info */}
              <div className="col-lg-6">
                <div className="checkbox-form">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="country-select">
                        <label>
                          Country <span className="required">*</span>
                        </label>
                        <NiceSelectTwo
                          options={countryes}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name=""
                          setapiEndPoint={setcountry}
                          className="gender-select"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Name <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={"Jhonathon Smith"}
                          placeholder="Enter Your Name"
                          {...register("Fname", {
                            required: "Name is required",
                          })}
                        />
                        {errors.Fname && (
                          <span className="error-message">
                            {errors.Fname.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Address <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Street address"
                          {...register("Address", {
                            required: "Address is required",
                          })}
                        />
                        {errors.Address && (
                          <span className="error-message">
                            {errors.Address.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <input
                          type="text"
                          placeholder="Apartment, suite, unit etc. (optional)"
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Town / City <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Town / City"
                          {...register("City", {
                            required: "Password is required",
                          })}
                        />
                        {errors.City && (
                          <span className="error-message">
                            {errors.City.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Postcode / Zip <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Postcode / Zip"
                          {...register("Postcode", {
                            required: "Postcode is required",
                          })}
                        />
                        {errors.Postcode && (
                          <span className="error-message">
                            {errors.Postcode.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="checkout-form-list">
                        <label>
                          Email Address <span className="required">*</span>
                        </label>
                        <input
                          type="email"
                          defaultValue={"jhonathon@gmail.com"}
                          placeholder=""
                          {...register("EmailAddress", {
                            required: "Email is required",
                          })}
                        />
                        {errors.EmailAddress && (
                          <span className="error-message">
                            {errors.EmailAddress.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="checkout-form-list">
                        <label>
                          Phone <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={"+88256412514"}
                          placeholder="Phone Number"
                          {...register("Phone", {
                            required: "Phone is required",
                          })}
                        />
                        {errors.Phone && (
                          <span className="error-message">
                            {errors.Phone.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* order info */}
              <div className="col-lg-6">
                <div className="your-order mb-30 ">
                  <h3>Your order</h3>
                  <div className="your-order-table table-responsive">
                    <table>
                      <thead>
                        <tr>
                          <th className="product-name">Product</th>
                          <th className="product-total">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartProducts.map((item, index) => {
                          const totalPrice =
                            (item?.totalCard ?? 0) * item?.price;
                          return (
                            <tr className="cart_item" key={index}>
                              <td className="product-name">
                                {item.productName}{" "}
                                <strong className="product-quantity">
                                  {" "}
                                  × {item?.totalCard}
                                </strong>
                              </td>
                              <td className="product-total">
                                <span className="amount">${totalPrice}</span>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr className="cart-subtotal">
                          <th>Cart Subtotal</th>
                          <td>
                            <span className="amount">${totalPrice}</span>
                          </td>
                        </tr>
                        <tr className="order-total">
                          <th>Order Total</th>
                          <td>
                            <strong>
                              <span className="amount">${totalPrice}</span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div className="payment-method">
                    <div className="accordion" id="checkoutAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="checkoutOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#bankOne"
                            aria-expanded="true"
                            aria-controls="bankOne"
                          >
                            Direct Bank Transfer
                          </button>
                        </h2>
                        <div
                          id="bankOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="checkoutOne"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="col-12">
                            <div className="checkout-form-list">
                              <input
                                type="text"
                                placeholder="Enter Your Account Info"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="paymentTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#payment"
                            aria-expanded="false"
                            aria-controls="payment"
                          >
                            Online Payment
                          </button>
                        </h2>
                        <div
                          id="payment"
                          className="accordion-collapse collapse"
                          aria-labelledby="paymentTwo"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="col-12">
                            <div className="checkout-form-list">
                              <input
                                type="text"
                                placeholder="Enter Your Card  Info"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item cart-input-box">
                        <div
                          id="paypal"
                          className="accordion-collapse collapse"
                          aria-labelledby="paypalThree"
                          data-bs-parent="#checkoutAccordion"
                        >
                          <div className="accordion-body">
                            Pay via PayPal; you can pay with your credit card if
                            you don’t have a PayPal account.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-button-payment mt-20">
                      {cartProducts.length ? (
                        <>
                          <button type="submit" className="bd-fill__btn">
                            Place Order
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={handleGoToShopPage}
                            className="bd-fill__btn"
                          >
                            Add Product For Checkout
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CheckOutMain;

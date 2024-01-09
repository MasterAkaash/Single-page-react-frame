import React from "react";

import { Button, Img, List, Radio, RadioGroup, Text } from "components";

const PaidContentPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[70px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group_25.svg"
                alt="Group"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-8 sm:hidden items-center justify-center md:ml-[0] ml-[270px] w-[31%] md:w-full">
              <List
                className="sm:flex-col flex-row gap-6 grid grid-cols-2 w-[62%] sm:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-row gap-3 items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text
                    className="ml-0.5 text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Products
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-row gap-[9px] items-center justify-between sm:ml-[0] pl-[5px] py-[5px] w-full">
                  <Text
                    className="text-base text-gray-900"
                    size="txtGilroyMedium16"
                  >
                    Resouces
                  </Text>
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_gray_901.svg"
                    alt="arrowdown One"
                  />
                </div>
              </List>
              <Text
                className="text-base text-gray-900"
                size="txtGilroyMedium16"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[220px] w-[18%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900">
                <Text size="txtGilroyMedium16">Sign in</Text>
              </a>
              <Button
                className="cursor-pointer font-medium min-w-[148px] text-base text-center"
                shape="round"
                color="blue_A700"
                size="sm"
                variant="fill"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1246px] mb-[191px] mx-auto pt-3 md:px-5 w-full">
          <div className="flex flex-col gap-4 items-center justify-start">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
              size="txtGilroySemiBold32"
            >
              Choose your plan
            </Text>
            <Text
              className="leading-[29.00px] text-black-900 text-center text-lg"
              size="txtGilroyMedium18"
            >
              <>
                Vulputate augue sed dui, eget bibendum quis fames varius id.
                Pellentesque orci molestie morbi.
                <br />
                felis elementum, eu mauris ac arcu tincidunt.{" "}
              </>
            </Text>
          </div>
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <div className="flex flex-row gap-6 items-center justify-center w-[16%] md:w-full">
              <Button
                className="cursor-pointer font-semibold min-w-[87px] rounded-[5px] text-center text-lg"
                shape="round"
                color="blue_A700"
                size="xs"
                variant="fill"
              >
                Monthly
              </Button>
              <div className="flex flex-col items-center justify-start p-2.5 rounded-[5px] w-auto">
                <Button className="bg-transparent cursor-pointer font-semibold min-w-[68px] text-blue_gray-400 text-center text-lg">
                  Annualy
                </Button>
              </div>
            </div>
            <List
              className="sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col gap-[50px] items-center justify-start p-8 sm:px-5 rounded-md shadow-bs w-full">
                <div className="flex flex-col gap-[37px] items-center justify-start pt-[7px] w-full">
                  <div className="flex flex-col gap-[35px] items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtGilroySemiBold24"
                    >
                      Free
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtGilroyBold40"
                    >
                      $0
                    </Text>
                  </div>
                  <RadioGroup
                    className="flex flex-col w-full"
                    name="radiogroup500visitors"
                  >
                    <Radio
                      value="500visitors"
                      className="sm:pr-5 text-black-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup500visitors"
                      label="500 visitors"
                      id="500visitors"
                    ></Radio>
                    <Radio
                      value="Unlimitedprojects"
                      className="mt-6 sm:pr-5 text-black-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup500visitors"
                      label="Unlimited projects"
                      id="Unlimitedprojects"
                    ></Radio>
                    <Radio
                      value="extendedfreetrial"
                      className="mt-6 sm:pr-5 text-black-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup500visitors"
                      label="extended free trial"
                      id="extendedfreetrial"
                    ></Radio>
                  </RadioGroup>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[230px] text-base text-center"
                  shape="round"
                  color="blue_A700"
                  size="md"
                  variant="fill"
                >
                  Create account
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[50px] items-center justify-start p-8 sm:px-5 rounded-md shadow-bs w-full">
                <div className="flex flex-col gap-[37px] items-center justify-start pt-[7px] w-full">
                  <div className="flex flex-col gap-[35px] items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtGilroySemiBold24"
                    >
                      Standard
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtGilroyBold40"
                    >
                      $99
                    </Text>
                  </div>
                  <RadioGroup
                    className="flex flex-col w-full"
                    name="radiogroup5000visitors"
                  >
                    <Radio
                      value="5000visitors"
                      className="sm:pr-5 text-black-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitors"
                      label="5000 visitors"
                      id="5000visitors"
                    ></Radio>
                    <Radio
                      value="Unlimitedprojects"
                      className="mt-6 sm:pr-5 text-black-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitors"
                      label="Unlimited projects"
                      id="Unlimitedprojects2"
                    ></Radio>
                    <Radio
                      value="extendedfreetrial"
                      className="mt-6 sm:pr-5 text-black-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitors"
                      label="extended free trial"
                      id="extendedfreetrial2"
                    ></Radio>
                  </RadioGroup>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[230px] text-base text-center"
                  shape="round"
                  color="blue_gray_400"
                  size="md"
                  variant="outline"
                >
                  Create account
                </Button>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col gap-[50px] items-center justify-start p-8 sm:px-5 rounded-md shadow-bs w-full">
                <div className="flex flex-col gap-[37px] items-center justify-start pt-[9px] w-full">
                  <div className="flex flex-col gap-7 items-center justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtGilroySemiBold24"
                    >
                      Enterprise
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                      size="txtGilroyBold40"
                    >
                      $299
                    </Text>
                  </div>
                  <RadioGroup
                    className="flex flex-col w-full"
                    name="radiogroup5000visitorsOne"
                  >
                    <Radio
                      value="5000visitors"
                      className="sm:pr-5 text-black-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitorsOne"
                      label="5000 visitors"
                      id="5000visitors2"
                    ></Radio>
                    <Radio
                      value="Unlimitedprojects"
                      className="mt-6 sm:pr-5 text-black-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitorsOne"
                      label="Unlimited projects"
                      id="Unlimitedprojects3"
                    ></Radio>
                    <Radio
                      value="extendedfreetrial"
                      className="mt-6 sm:pr-5 text-black-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      checked={false}
                      name="radiogroup5000visitorsOne"
                      label="extended free trial"
                      id="extendedfreetrial3"
                    ></Radio>
                  </RadioGroup>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[230px] text-base text-center"
                  shape="round"
                  color="blue_gray_400"
                  size="md"
                  variant="outline"
                >
                  Create account
                </Button>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaidContentPage;

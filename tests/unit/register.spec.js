import { mount } from "@vue/test-utils";
import RegisterLogin from "@/components/Register.vue";

describe("RegisterLogin.vue", () => {
    it("Can fill out form", async () => {
        const wrapper = mount(RegisterLogin);

        wrapper.find("#name").setValue("Vilde");
        wrapper.find("#adress").setValue("Trondheim");
        wrapper.find("#username").setValue("vilde");
        wrapper.find("#password").setValue("pass");
        wrapper.find("#email").setValue("vildegy@outlook.com");
        wrapper.find("#phone").setValue("97603639");

    });
});
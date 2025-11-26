"use client";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// ---------------- ZOD SCHEMA ----------------
const QuoteSchema = z.object({
  name: z.string("Name is required").min(1, "Name is required"),
  email: z.string().email("Enter valid email"),
  phone: z.string().min(8, "Phone number required"),
  timeFrame: z.string().min(1, "Select a time frame"),
  size: z.string().min(1, "Select a size"),
  quantity: z.string().min(1, "Select quantity"),
  projectDesc: z.string().min(10, "Minimum 10 characters required"),
});

export default function RequestQuoteForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      timeFrame: "",
      size: "",
      quantity: "",
      projectDesc: "",
    },
    validationSchema: toFormikValidationSchema(QuoteSchema),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Form submitted!");
    },
  });

  return (
    <div className="w-full">
      <div className=" my-20 m-10 md:mx-40 flex flex-col">
        <h2 className="text-center text-4xl font-bold tracking-tight mb-12">
          REQUEST A QUOTE
        </h2>

        <form onSubmit={formik.handleSubmit} className="space-y-10">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Name</Label>
              <Input
                name="name"
                placeholder="Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.errors.name && (
                <p className="text-red-400 text-sm">{formik.errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>E-mail</Label>
              <Input
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <p className="text-red-400 text-sm">{formik.errors.email}</p>
              )}
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Phone Number</Label>
              <Input
                name="phone"
                placeholder="Phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.errors.phone && (
                <p className="text-red-400 text-sm">{formik.errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>
                Time Frame <span className="text-red-400">*</span>
              </Label>
              <Select
                onValueChange={(value) =>
                  formik.setFieldValue("timeFrame", value)
                }>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Time Frame" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-week">1 Week</SelectItem>
                  <SelectItem value="2-weeks">2 Weeks</SelectItem>
                  <SelectItem value="1-month">1 Month</SelectItem>
                </SelectContent>
              </Select>
              {formik.errors.timeFrame && (
                <p className="text-red-400 text-sm">
                  {formik.errors.timeFrame}
                </p>
              )}
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>
                Size <span className="text-red-400">*</span>
              </Label>
              <Select
                onValueChange={(value) => formik.setFieldValue("size", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
              {formik.errors.size && (
                <p className="text-red-400 text-sm">{formik.errors.size}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>
                Quantity <span className="text-red-400">*</span>
              </Label>
              <Select
                onValueChange={(value) =>
                  formik.setFieldValue("quantity", value)
                }>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                </SelectContent>
              </Select>
              {formik.errors.quantity && (
                <p className="text-red-400 text-sm">{formik.errors.quantity}</p>
              )}
            </div>
          </div>

          {/* Row 4 - TextArea */}
          <div className="space-y-2">
            <Label>
              Please Describe Your Project{" "}
              <span className="text-red-400">*</span>
            </Label>
            <Textarea
              placeholder="Describe your project..."
              name="projectDesc"
              value={formik.values.projectDesc}
              onChange={formik.handleChange}
              // className="min-h-[160px]"
            />
            {formik.errors.projectDesc && (
              <p className="text-red-400 text-sm">
                {formik.errors.projectDesc}
              </p>
            )}
          </div>

          {/* Terms */}
          <p className="text-center text-sm text-gray-600">
            By submitting this form you agree to our{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="text-blue-600 underline cursor-pointer">
              Privacy Policy
            </span>
            .
          </p>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button type="submit" className="px-6 py-5">
              Loerum Ipsum →
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

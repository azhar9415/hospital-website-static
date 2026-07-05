import React from "react";
import { motion } from "framer-motion";
import doctorImg from "../assets/Doctor.jpeg";

const Specialist = () => {
  return (
    <section
      id="specialist"
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        className="bg-surface rounded-2xl border border-site-border shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08)] overflow-hidden"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center p-10 lg:p-14">

          {/* Doctor Image */}

          <div className="flex justify-center">
            <div className="overflow-hidden rounded-2xl border-4 border-accent-light shadow-2xl max-w-md">
              <img
                src={doctorImg}
                alt="Dr. Mohd Tabish Azmi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Doctor Information */}

          <div>
            <span className="uppercase tracking-[0.25em] text-secondary font-semibold">
              Meet Our Specialist
            </span>

            <h2 className="text-4xl font-bold text-heading mt-3 mb-2">
              Dr. Mohd Tabish Azmi
            </h2>

            <p className="text-accent text-lg font-semibold mb-6">
              MBBS • MS (Orthopaedics)
            </p>

            <p className="text-body leading-8 mb-6">
              Dr. Mohd Tabish Azmi is a dedicated orthopaedic surgeon committed
              to providing comprehensive care for bone, joint, ligament, muscle,
              and spine-related conditions. With a patient-first approach, he
              focuses on accurate diagnosis, evidence-based treatment, and
              personalized rehabilitation to help patients regain mobility and
              return to an active lifestyle.
            </p>

            <p className="text-body leading-8 mb-8">
              At Riaz Orthopaedic Hospital, he combines modern orthopaedic
              techniques with compassionate care to deliver the highest
              standards of treatment for fractures, arthritis, sports injuries,
              joint disorders, and trauma care.
            </p>

            <div className="grid grid-cols-2 gap-5">

              <div className="bg-site-bg border border-site-border rounded-xl p-5">
                <h4 className="font-bold text-heading mb-1">
                  Qualification
                </h4>
                <p className="text-body">
                  MBBS, MS (Orthopaedics)
                </p>
              </div>

              <div className="bg-site-bg border border-site-border rounded-xl p-5">
                <h4 className="font-bold text-heading mb-1">
                  Specialty
                </h4>
                <p className="text-body">
                  Orthopaedic & Trauma Care
                </p>
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Specialist;
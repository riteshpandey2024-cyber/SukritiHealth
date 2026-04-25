const PrivacyPolicy = () => {
  return (
    <div className="pb-16">
      {/* Hero */}
      <div className="text-center py-12 bg-gradient-to-br from-primary to-blue-600 rounded-2xl mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Privacy Policy &amp; Hospital Rules
        </h1>
        <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
          SukritiHealth is committed to maintaining the highest standards of patient care,
          data privacy, and professional conduct. All staff, patients, and visitors must
          comply with the following policies.
        </p>
        <p className="mt-4 text-xs text-white/60">Last Updated: April 2024 &middot; Effective Immediately</p>
      </div>

      {/* Table of Contents */}
      <div className="border border-border rounded-xl p-6 bg-white mb-10">
        <h2 className="text-lg font-semibold text-text-dark mb-4">Table of Contents</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-sm">
          {[
            'Patient Privacy & Data Protection',
            'Consent & Treatment Policy',
            'Hospital Rules & Regulations',
            'Roles & Responsibilities',
            'Strictly Prohibited Actions',
            'Infection Control & Safety',
            'Visitor Policy',
            'Complaint & Grievance Procedure',
            'Disclaimer & Liability',
          ].map((item, i) => (
            <a key={i} href={`#section-${i + 1}`} className="text-primary hover:underline flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-primary-light text-primary text-xs flex items-center justify-center font-bold flex-shrink-0">{i + 1}</span>
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Section 1 */}
      <section id="section-1" className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-7 bg-primary rounded-full"></div>
          <h2 className="text-xl font-semibold text-text-dark">1. Patient Privacy &amp; Data Protection</h2>
        </div>
        <div className="border border-border rounded-xl p-6 bg-white space-y-4 text-sm text-text-muted leading-relaxed">
          <p>SukritiHealth values patient confidentiality above all else. We comply with all applicable healthcare privacy laws and regulations.</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>All patient medical records, diagnoses, treatment plans, and personal information are strictly confidential.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Patient data is encrypted using industry-standard AES-256 encryption and stored securely on HIPAA-compliant servers.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Access to patient records is restricted to authorized medical personnel directly involved in the patient's care.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Patient information will never be shared with third parties without explicit written consent, except when required by law.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Patients have the right to request, review, and correct their personal health information at any time.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>All digital communications between patients and healthcare providers are transmitted via secure, encrypted channels.</li>
          </ul>
        </div>
      </section>

      {/* Section 2 */}
      <section id="section-2" className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-7 bg-primary rounded-full"></div>
          <h2 className="text-xl font-semibold text-text-dark">2. Consent &amp; Treatment Policy</h2>
        </div>
        <div className="border border-border rounded-xl p-6 bg-white space-y-4 text-sm text-text-muted leading-relaxed">
          <p>Informed consent is a fundamental patient right at SukritiHealth.</p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>No medical procedure, treatment, or diagnostic test shall be performed without the patient's informed consent.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Patients must be clearly informed about the nature of their condition, proposed treatment options, potential risks, and expected outcomes.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>For minors or incapacitated patients, consent must be obtained from a legally authorized guardian.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Patients reserve the right to refuse treatment at any time, and such refusal will be documented without prejudice.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Emergency life-saving treatment may be administered without prior consent when delay would endanger the patient's life.</li>
          </ul>
        </div>
      </section>

      {/* Section 3 */}
      <section id="section-3" className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-7 bg-primary rounded-full"></div>
          <h2 className="text-xl font-semibold text-text-dark">3. Hospital Rules &amp; Regulations</h2>
        </div>
        <div className="border border-border rounded-xl p-6 bg-white space-y-4 text-sm text-text-muted leading-relaxed">
          <p className="font-medium text-text-dark">All individuals within SukritiHealth premises must adhere to the following rules:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface rounded-lg p-4 space-y-2">
              <p className="font-medium text-text-dark text-sm">General Conduct</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Maintain silence in patient wards, ICUs, and operating areas.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Hospital ID badges must be displayed at all times by staff and visitors.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Mobile phones must be on silent mode within clinical zones.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>No unauthorized photography or video recording on premises.</li>
              </ul>
            </div>
            <div className="bg-surface rounded-lg p-4 space-y-2">
              <p className="font-medium text-text-dark text-sm">Hygiene &amp; Safety</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Hand sanitization is mandatory before entering patient rooms.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Personal protective equipment (PPE) must be worn in designated areas.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Report any spills, hazards, or safety concerns immediately to the safety officer.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Fire exits must remain unobstructed at all times.</li>
              </ul>
            </div>
            <div className="bg-surface rounded-lg p-4 space-y-2">
              <p className="font-medium text-text-dark text-sm">Appointment &amp; Scheduling</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Patients must arrive 15 minutes before their scheduled appointment.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Cancellations must be made at least 4 hours prior to the appointment time.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Repeated no-shows may result in temporary suspension of booking privileges.</li>
              </ul>
            </div>
            <div className="bg-surface rounded-lg p-4 space-y-2">
              <p className="font-medium text-text-dark text-sm">Payment &amp; Billing</p>
              <ul className="space-y-1.5">
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Consultation fees are payable at the time of appointment booking.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>Refunds for cancelled appointments are processed within 5-7 business days.</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span>All billing disputes must be raised within 30 days of the transaction.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section id="section-4" className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-7 bg-primary rounded-full"></div>
          <h2 className="text-xl font-semibold text-text-dark">4. Roles &amp; Responsibilities</h2>
        </div>
        <div className="border border-border rounded-xl p-6 bg-white text-sm text-text-muted leading-relaxed">
          <p className="mb-4">Each member of SukritiHealth has clearly defined responsibilities to ensure smooth operations and patient safety:</p>
          <div className="space-y-4">
            {[
              { role: 'Doctors', icon: '🩺', duties: ['Provide accurate diagnosis and evidence-based treatment.', 'Maintain up-to-date medical knowledge through continuous education.', 'Document all patient interactions, treatments, and outcomes accurately.', 'Obtain informed consent before every procedure.', 'Collaborate with other departments for comprehensive patient care.'] },
              { role: 'Nurses', icon: '💉', duties: ['Administer medications and treatments as prescribed by physicians.', 'Monitor and record patient vital signs every scheduled interval.', 'Provide compassionate bedside care and emotional support.', 'Ensure proper sterilization and infection control protocols.', 'Report any changes in patient condition to the attending doctor immediately.'] },
              { role: 'Pharmacists', icon: '💊', duties: ['Accurately dispense medications as per doctor prescriptions.', 'Verify drug interactions and allergies before dispensing.', 'Maintain proper storage conditions for all medications.', 'Keep detailed inventory records and report shortages.', 'Counsel patients on proper medication usage and side effects.'] },
              { role: 'Ward Boys / Girls', icon: '🏥', duties: ['Assist patients with mobility, hygiene, and daily activities.', 'Transport patients safely between departments.', 'Maintain cleanliness and orderliness of patient rooms.', 'Respond promptly to patient call bells.', 'Report any patient concerns to the nursing staff.'] },
              { role: 'Technicians (Radiology/Lab)', icon: '🔬', duties: ['Perform diagnostic tests accurately and efficiently.', 'Calibrate and maintain all laboratory and imaging equipment.', 'Follow strict safety protocols when handling samples and radiation.', 'Deliver timely and accurate test results to physicians.', 'Maintain detailed logs of all tests performed.'] },
              { role: 'Receptionists / Ward Clerks', icon: '📋', duties: ['Greet and assist patients with registration and admissions.', 'Manage appointment scheduling and patient flow efficiently.', 'Maintain accurate and up-to-date patient records.', 'Handle phone inquiries and direct calls to appropriate departments.', 'Ensure patient waiting areas are comfortable and organized.'] },
              { role: 'Hospital Administrators', icon: '👔', duties: ['Oversee daily hospital operations and staff management.', 'Develop and implement hospital policies and procedures.', 'Manage budgets, resources, and procurement.', 'Ensure compliance with healthcare regulations and accreditation standards.', 'Address staff and patient grievances promptly and fairly.'] },
              { role: 'Social Workers / Counselors', icon: '🤝', duties: ['Provide emotional and psychological support to patients and families.', 'Assist with discharge planning and community resource coordination.', 'Advocate for patient rights and access to care.', 'Facilitate support groups and wellness programs.', 'Maintain confidentiality of all counseling sessions.'] },
              { role: 'Porters', icon: '🚶', duties: ['Transport equipment, supplies, and specimens safely.', 'Assist with patient transfers between wards and departments.', 'Maintain cleanliness of transport equipment (wheelchairs, stretchers).', 'Follow designated routes to avoid disrupting clinical areas.', 'Report any damaged or faulty equipment immediately.'] },
              { role: 'Housekeeping / Clinical Assistants', icon: '🧹', duties: ['Maintain strict infection control and sanitation standards.', 'Clean and disinfect patient rooms, operating theatres, and common areas.', 'Properly segregate and dispose of medical waste per regulations.', 'Restock hygiene supplies (sanitizers, gloves, tissues) in all areas.', 'Report any maintenance issues or biohazard spills immediately.'] },
            ].map((item, idx) => (
              <div key={idx} className="bg-surface rounded-lg p-4">
                <p className="font-semibold text-text-dark mb-2 flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span> {item.role}
                </p>
                <ul className="space-y-1 ml-7">
                  {item.duties.map((duty, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5 flex-shrink-0">•</span>
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Strictly Prohibited */}
      <section id="section-5" className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-7 bg-red-500 rounded-full"></div>
          <h2 className="text-xl font-semibold text-red-600">5. Strictly Prohibited Actions ⚠️</h2>
        </div>
        <div className="border-2 border-red-200 rounded-xl p-6 bg-red-50 text-sm leading-relaxed">
          <p className="text-red-700 font-semibold mb-4">
            The following actions are STRICTLY PROHIBITED and will result in immediate disciplinary action,
            termination of employment, or legal prosecution:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Unauthorized access, sharing, or theft of patient medical records or personal data.',
              'Practicing medicine, prescribing drugs, or performing procedures without proper licensure.',
              'Any form of harassment, discrimination, or violence against patients, visitors, or staff.',
              'Accepting bribes, kickbacks, or gifts from pharmaceutical companies or vendors.',
              'Tampering with medical equipment, prescriptions, or diagnostic results.',
              'Consuming alcohol or being under the influence of drugs while on duty.',
              'Smoking within hospital premises (including e-cigarettes and vaping).',
              'Unauthorized distribution or possession of controlled substances.',
              'Neglecting patient care duties or willfully delaying emergency treatment.',
              'Falsifying patient records, billing documents, or insurance claims.',
              'Using hospital resources, equipment, or data for personal gain.',
              'Entering restricted areas (operation theatres, ICU, labs) without authorization.',
              'Taking unauthorized photographs or videos of patients, staff, or procedures.',
              'Engaging in any activity that compromises patient safety or hospital reputation.',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-red-100">
                <span className="text-red-500 font-bold flex-shrink-0 mt-0.5">✕</span>
                <span className="text-red-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 bg-red-100 rounded-lg p-4 border border-red-200">
            <p className="text-red-800 font-semibold text-center">
              ⚠️ Violations will be investigated and may lead to immediate suspension,
              termination, legal action, and reporting to relevant medical/licensing authorities.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 */}
      <section id="section-6" className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-7 bg-primary rounded-full"></div>
          <h2 className="text-xl font-semibold text-text-dark">6. Infection Control &amp; Safety</h2>
        </div>
        <div className="border border-border rounded-xl p-6 bg-white space-y-3 text-sm text-text-muted leading-relaxed">
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>All staff must follow standard precautions and hand hygiene protocols as per WHO guidelines.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Needle-stick injuries and exposure incidents must be reported within 1 hour.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Biomedical waste must be segregated into color-coded bins (yellow, red, blue, black) as per regulations.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>All reusable medical instruments must undergo proper sterilization before each use.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Staff showing symptoms of infectious disease must report to occupational health before resuming duties.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Emergency evacuation drills are conducted quarterly; all staff must participate.</li>
          </ul>
        </div>
      </section>

      {/* Section 7 */}
      <section id="section-7" className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-7 bg-primary rounded-full"></div>
          <h2 className="text-xl font-semibold text-text-dark">7. Visitor Policy</h2>
        </div>
        <div className="border border-border rounded-xl p-6 bg-white space-y-3 text-sm text-text-muted leading-relaxed">
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Visiting hours are from 10:00 AM to 12:00 PM and 4:00 PM to 6:00 PM daily.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>A maximum of 2 visitors are allowed per patient at any given time.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Children under 12 years are not permitted in ICU or isolation wards.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Visitors must sanitize hands before and after visiting patients.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Outside food is not allowed unless approved by the patient's physician.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Visitors must wear visitor badges at all times and return them upon exit.</li>
          </ul>
        </div>
      </section>

      {/* Section 8 */}
      <section id="section-8" className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-7 bg-primary rounded-full"></div>
          <h2 className="text-xl font-semibold text-text-dark">8. Complaint &amp; Grievance Procedure</h2>
        </div>
        <div className="border border-border rounded-xl p-6 bg-white space-y-4 text-sm text-text-muted leading-relaxed">
          <p>SukritiHealth encourages feedback and addresses all complaints transparently:</p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Submit', desc: 'File a complaint via the hospital helpdesk, email, or feedback form.' },
              { step: '2', title: 'Acknowledge', desc: 'All complaints are acknowledged within 24 hours of receipt.' },
              { step: '3', title: 'Investigate', desc: 'A dedicated grievance committee reviews and investigates each case.' },
              { step: '4', title: 'Resolve', desc: 'Resolution is communicated within 7 working days with follow-up.' },
            ].map((item, i) => (
              <div key={i} className="text-center bg-surface rounded-lg p-4">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-2 text-lg font-bold">{item.step}</div>
                <p className="font-semibold text-text-dark mb-1">{item.title}</p>
                <p className="text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
          <p>For urgent concerns, contact the Patient Relations Officer directly at <span className="text-primary font-medium">grievance@sukritihealth.com</span> or call <span className="text-primary font-medium">+1-212-456-7899</span>.</p>
        </div>
      </section>

      {/* Section 9 */}
      <section id="section-9" className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-1 h-7 bg-primary rounded-full"></div>
          <h2 className="text-xl font-semibold text-text-dark">9. Disclaimer &amp; Liability</h2>
        </div>
        <div className="border border-border rounded-xl p-6 bg-white space-y-3 text-sm text-text-muted leading-relaxed">
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>SukritiHealth provides medical information for general awareness; it does not replace professional medical advice.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Treatment outcomes may vary, and the hospital is not liable for unforeseen complications arising despite standard care.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>The hospital reserves the right to modify these policies at any time. Updates will be communicated through official channels.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>By using SukritiHealth services, patients and staff agree to abide by all stated policies and regulations.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>All disputes shall be subject to the jurisdiction of courts in Washington, USA.</li>
          </ul>
        </div>
      </section>

      {/* Acknowledgement */}
      <div className="bg-gradient-to-r from-primary to-blue-500 rounded-2xl p-8 text-center text-white">
        <h3 className="text-xl font-bold mb-2">Policy Acknowledgement</h3>
        <p className="text-white/80 max-w-xl mx-auto text-sm mb-1">
          By accessing SukritiHealth services — as a patient, visitor, or employee — you acknowledge
          that you have read, understood, and agree to comply with all the policies stated above.
        </p>
        <p className="text-white/60 text-xs mt-3">
          For questions, contact: <span className="text-white font-medium">legal@sukritihealth.com</span> &middot; Version 2.1 &middot; April 2024
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy

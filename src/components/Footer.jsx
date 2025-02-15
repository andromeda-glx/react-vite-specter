/* eslint-disable react/prop-types */
export default function Footer({lightMode}) {
  return (
    <footer className={`${lightMode ? "bg-blue-600 " : "bg-blue-900"} text-white p-5 transition-colors text-center text-sm`}>
        &copy; SPECTER 2025 All rights reserved.
    </footer>
  )
}


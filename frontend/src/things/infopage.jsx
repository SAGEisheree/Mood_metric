import React from 'react'

const InfoPage = () => {
  return (
    <section className="px-4 py-4 md:mr-64 md:py-6">
      <div className="max-w-xl md:max-w-2xl">
        <div className=" bg-base-200/80 border border-base-300/70 shadow-md p-5 md:p-6 space-y-3">
          <h1 className="text-3xl max-md:text-xl font-bold leading-snug">
            An open source project built with a goal &quot;A very simple and easy to use JOURNAL&quot;
          </h1>

          <p className="mt-2 max-md:text-sm text-base text-base-content/80">
            With the help of DAYDEX, You can save your memories here.<br /> Your data doesnt get collected. <br /> NOTE: Still in building phase. Check dev logs for more
          </p>
          <p className="mt-2 max-md:text-sm text-base text-base-content/80">
            Click on any day to assign Notes and mood colors.
          </p>
        </div>
      </div>
    </section>
  )
}

export default InfoPage
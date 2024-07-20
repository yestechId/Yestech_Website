import html2canvas from 'html2canvas'
import { FC, useRef } from 'react'

interface Parameter {
  tHead: string
  tBody: string[]
}

interface DownloadTableProps {
  parameters: Parameter[]
}

const DownloadTable: FC<DownloadTableProps> = ({ parameters }) => {
  const tableRef = useRef<HTMLTableElement>(null)

  const handleDownload = () => {
    if (tableRef.current) {
      html2canvas(tableRef.current)
        .then((canvas) => {
          const link = document.createElement('a')
          link.href = canvas.toDataURL('image/png')
          link.download = 'table.png'
          link.click()
        })
        .catch((error) => {
          console.error('Error generating image', error)
        })
    } else {
      console.error('Table element not found')
    }
  }

  return (
    <section
      ref={tableRef}
      className="w-full overflow-auto mx-auto bg-[url(/images/detail-product/bg-linear-banner-3.svg)] bg-cover bg-center bg-no-repeat rounded-none md:rounded-[30px] mt-10 py-12 md:py-20 h-min"
    >
      <div className="flex-col w-[80%] mx-auto flex">
        <div className="flex flex-col items-center justify-between gap-5 md:gap-0 md:flex-row">
          <h2 className="text-2xl font-bold text-center text-white md:text-4xl">PARAMETERS</h2>
          <div className="h-12 cursor-pointer w-44 flex-center" onClick={handleDownload}>
            <img src="/images/detail-product/button-download-parameters.svg" alt="button download" />
          </div>
        </div>
      </div>

      <div className=" border-slate-50 border-opacity-10 p-5  bg-white border rounded-xl bg-opacity-5 w-[80%] md:w-[90%] mt-5 md:mt-10 mx-auto md:overflow-hidden overflow-auto">
        <table className="w-full">
          <tbody>
            {parameters.map((param, rowIndex) => (
              <tr key={rowIndex} className="text-xs border-b md:text-sm border-slate-50 border-opacity-10">
                <td className="p-2 text-white">{param.tHead}</td>
                {param.tBody.map((body, colIndex) => (
                  <td key={colIndex} className="table-cell p-2 text-white ">
                    {body}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <div className="w-full px-0 mb-5 -mt-5 md:mb-10 md:-mt-0 md:px-10 flex-center">
        <img
          src="/images/detail-product/tabel-parameters.png"
          alt="list detail"
          className="hidden w-full h-auto md:block"
        />
        <img
          src="/images/detail-product/tabel-parameters-mobile.png"
          alt="list detail"
          className="w-full h-auto md:hidden"
        />
      </div> */}
    </section>
  )
}

export default DownloadTable

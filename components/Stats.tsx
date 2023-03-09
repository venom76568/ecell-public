import { IBM_Plex_Sans_Condensed } from "next/font/google";
import { classNames } from "./utils/helper";

const ibmPlex = IBM_Plex_Sans_Condensed({ weight: ["100", "200", "300", "400", "500", "600", "700"], subsets: ["latin"] });

const Stats = () => {
  return (
    <div className="mt-40 xl:mt-0 bg-gradient-to-b from-[rgb(2,157,249,1)] to-[rgba(8,107,234,1)] shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center py-20 gap-8">
        <div className="flex justify-center gap-10 lg:justify-evenly">
          <svg width="70" height="70" viewBox="0 0 107 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M99 17.2255H66V103.352H106.333V24.1156C106.333 22.2882 105.561 20.5357 104.185 19.2435C102.81 17.9514 100.945 17.2255 99 17.2255ZM80.6667 75.7918H73.3333V68.9016H80.6667V75.7918ZM80.6667 58.5664H73.3333V51.6762H80.6667V58.5664ZM80.6667 41.341H73.3333V34.4508H80.6667V41.341ZM95.3333 75.7918H88V68.9016H95.3333V75.7918ZM95.3333 58.5664H88V51.6762H95.3333V58.5664ZM95.3333 41.341H88V34.4508H95.3333V41.341Z" fill="white" />
            <path d="M50.8933 0H7.77333C5.71172 0 3.73454 0.76948 2.27676 2.13916C0.818973 3.50885 0 5.36654 0 7.30356V103.352H18.3333V93.0171H40.3333V103.352H58.6667V7.30356C58.6667 5.36654 57.8477 3.50885 56.3899 2.13916C54.9321 0.76948 52.9549 0 50.8933 0V0ZM18.3333 75.7917H11V68.9015H18.3333V75.7917ZM18.3333 58.5663H11V51.6762H18.3333V58.5663ZM18.3333 41.3409H11V34.4508H18.3333V41.3409ZM18.3333 24.1155H11V17.2254H18.3333V24.1155ZM33 75.7917H25.6667V68.9015H33V75.7917ZM33 58.5663H25.6667V51.6762H33V58.5663ZM33 41.3409H25.6667V34.4508H33V41.3409ZM33 24.1155H25.6667V17.2254H33V24.1155ZM47.6667 75.7917H40.3333V68.9015H47.6667V75.7917ZM47.6667 58.5663H40.3333V51.6762H47.6667V58.5663ZM47.6667 41.3409H40.3333V34.4508H47.6667V41.3409ZM47.6667 24.1155H40.3333V17.2254H47.6667V24.1155Z" fill="white" />
          </svg>
          <div className="flex flex-col text-white justify-center">
            <span className={classNames("text-5xl", ibmPlex.className)}>000+</span>
            <span className="text-xl uppercase text-center">Cities</span>
          </div>
        </div>
        <div className="flex justify-center gap-10 lg:justify-evenly">
          <svg width="80" height="70" viewBox="0 0 132 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.763 1.99408C59.651 0.681089 62.8068 0 66.0025 0C69.1982 0 72.354 0.681089 75.242 1.99408L128.853 26.3671C129.787 26.7913 130.577 27.4594 131.134 28.2948C131.691 29.1302 131.991 30.0992 132 31.0907C132.009 32.0822 131.727 33.0561 131.186 33.9009C130.645 34.7457 129.867 35.4271 128.941 35.8672L75.594 61.2641C72.6129 62.6834 69.3303 63.422 66.0025 63.422C62.6747 63.422 59.392 62.6834 56.411 61.2641L11.0055 39.6461V63.333C11.0055 64.7328 10.4261 66.0752 9.39467 67.065C8.36328 68.0548 6.96441 68.6108 5.5058 68.6108C4.04719 68.6108 2.64832 68.0548 1.61692 67.065C0.585529 66.0752 0.00609799 64.7328 0.00609799 63.333V31.4021C-0.0450343 30.3588 0.226299 29.3242 0.786007 28.4283C1.34571 27.5325 2.16883 26.8154 3.15193 26.3671L56.763 1.98352V1.99408ZM22.0049 56.6724V73.8887C22.005 74.583 22.1479 75.2704 22.4254 75.9116C22.7029 76.5528 23.1094 77.1352 23.6218 77.6254L23.6438 77.6571L23.8968 77.8787L24.5568 78.4698C28.0038 81.4182 31.7305 84.051 35.6881 86.3338C43.0357 90.5666 53.6502 95 66.0025 95C78.3548 95 88.9692 90.5666 96.3278 86.3338C100.285 84.051 104.012 81.4182 107.459 78.4698L108.119 77.8787L108.295 77.7098L108.361 77.6465L108.372 77.6359L108.394 77.6254C108.905 77.1343 109.309 76.5516 109.585 75.9104C109.86 75.2692 110.001 74.5822 110 73.8887V56.6618L80.4777 70.722C75.9786 72.8632 71.0245 73.9774 66.0025 73.9774C60.9805 73.9774 56.0264 72.8632 51.5273 70.722L22.0049 56.6618V56.6724Z" fill="white" />
          </svg>
          <div className="flex flex-col text-white justify-center">
            <span className={classNames("text-5xl", ibmPlex.className)}>000+</span>
            <span className="text-xl uppercase text-center">Students</span>
          </div>
        </div>
        <div className="flex justify-center gap-10 lg:justify-evenly">
          <svg width="70" height="70" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.7478 19.0097C25.6052 30.2754 18.6446 46.4605 17.9982 47.9856L0 40.3604L20.1361 20.4364C22.4729 18.1242 25.8538 17.0911 29.1352 17.7306L35.7478 19.0097ZM45.5922 71.4025C45.5922 71.4025 64.187 63.7772 74.8765 53.2003C101.725 26.6349 97.25 5.87461 95.8082 1.20107C91.0849 -0.274778 70.1035 -4.65314 43.2554 21.9122C32.5658 32.4891 24.8594 50.8881 24.8594 50.8881L45.5922 71.4025ZM77.81 60.6287C66.4243 70.6645 50.0669 77.5518 48.5256 78.1914L56.232 96L76.3681 76.076C78.7049 73.7638 79.749 70.4186 79.1026 67.1717L77.81 60.6287ZM34.8032 76.322C34.8032 80.4052 33.1127 84.0948 30.4279 86.7513C24.5611 92.5564 0 96 0 96C0 96 3.48032 71.6976 9.34714 65.8926C11.4293 63.8216 14.0866 62.4095 16.9815 61.8356C19.8763 61.2618 22.8782 61.5521 25.606 62.6697C28.3338 63.7873 30.6645 65.6817 32.302 68.1125C33.9395 70.5433 34.8101 73.4007 34.8032 76.322ZM54.6907 32.0464C54.6907 26.6349 59.1654 22.2074 64.6345 22.2074C70.1035 22.2074 74.5782 26.6349 74.5782 32.0464C74.5782 37.4579 70.1035 41.8854 64.6345 41.8854C59.1654 41.8854 54.6907 37.4579 54.6907 32.0464Z" fill="white" />
          </svg>
          <div className="flex flex-col text-white justify-center">
            <span className={classNames("text-5xl", ibmPlex.className)}>000+</span>
            <span className="text-xl uppercase text-center">Startups</span>
          </div>
        </div>
        <div className="flex justify-center gap-10 lg:justify-evenly">
          <svg width="70" height="70" viewBox="0 0 98 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.2294 52.7305C0.645308 53.1301 0.233371 53.7279 0.0734229 54.4081C-0.0865256 55.0884 0.0169052 55.8026 0.36367 56.4124L7.42017 68.3863C8.14433 69.6136 9.805 70.1205 11.1063 69.4962L32.657 59.2671V96H43.5466V54.0912L65.7125 43.5633L51.4471 19.338L1.2294 52.7305ZM95.0384 10.8217C92.104 5.84889 87.2749 2.22136 81.6125 0.736493C75.95 -0.748372 69.9177 0.030944 64.8413 2.90315C59.8866 5.70454 56.6305 10.1547 55.0352 15.1172L71.239 42.6295C76.4171 43.7607 81.9817 43.2165 86.9474 40.4151C92.0246 37.5422 95.7294 32.8104 97.2467 27.2606C98.7641 21.7108 97.9697 15.7976 95.0384 10.8217Z" fill="white" />
          </svg>
          <div className="flex flex-col text-white justify-center">
            <span className={classNames("text-5xl", ibmPlex.className)}>000+</span>
            <span className="text-xl uppercase text-center">Speakers</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats;
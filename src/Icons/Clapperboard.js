import Icon from './Icon';

function Clapperboard({ hover, shadow, color1, color2, className, ...props }) {
  return (
    <Icon {...{ hover, shadow, color1, color2, className, ...props }}>
      <path
        fillRule="evenodd"
        fill={color1 || 'rgb(75, 75, 75)'}
        d="M1185.510,1190.000 L53.044,1190.000 C47.521,1190.000 43.044,1185.523 43.044,1180.000 L43.044,442.673 C43.044,437.150 47.521,432.673 53.044,432.673 L1185.510,432.673 C1191.033,432.673 1195.510,437.150 1195.510,442.673 L1195.510,1180.000 C1195.510,1185.523 1191.033,1190.000 1185.510,1190.000 ZM1132.998,139.541 L48.166,432.637 C40.495,434.709 32.597,430.166 30.526,422.489 L0.525,311.287 C-1.546,303.610 2.993,295.707 10.665,293.634 L1095.496,0.538 C1103.168,-1.535 1111.065,3.009 1113.137,10.685 L1143.138,121.888 C1145.209,129.564 1140.669,137.468 1132.998,139.541 Z"
      />
      <path
        fillRule="evenodd"
        fill={color2 || 'rgb(203, 203, 203)'}
        d="M1195.369,548.940 C1193.761,547.535 1116.372,432.685 1116.372,432.685 C1116.372,432.685 1178.845,432.896 1184.181,432.778 C1192.679,432.591 1195.666,438.424 1195.417,445.080 C1196.071,446.213 1196.325,549.775 1195.369,548.940 ZM1136.067,138.287 C1133.479,139.409 1075.645,155.083 1075.645,155.083 L943.644,40.454 L1063.022,7.891 C1063.022,7.891 1126.375,61.990 1126.930,62.585 C1127.439,63.130 1142.477,117.984 1142.781,119.252 C1145.420,131.117 1143.023,135.274 1136.067,138.287 ZM861.928,213.310 L729.873,98.766 L849.252,66.202 L981.654,180.837 L861.928,213.310 ZM647.093,271.536 L516.103,157.077 L635.481,124.513 L767.938,239.064 L647.093,271.536 ZM434.562,328.551 L302.333,215.388 L421.711,182.824 L553.941,295.988 L434.562,328.551 ZM220.792,386.863 L87.626,272.656 L206.233,240.183 L340.170,354.299 L220.792,386.863 ZM49.583,432.778 C34.890,435.171 33.122,428.310 31.680,424.940 C29.677,421.752 -0.762,315.216 0.467,304.835 C0.451,304.965 126.400,412.610 126.400,412.610 C126.400,412.610 50.465,432.634 49.583,432.778 ZM55.011,432.685 C90.109,432.685 132.259,432.685 132.259,432.685 L230.095,576.664 L106.361,576.664 C106.361,576.664 44.025,484.694 43.175,483.676 C41.969,482.233 42.869,446.215 42.869,446.215 C42.869,446.215 41.694,432.685 55.011,432.685 ZM196.932,902.053 L1041.623,902.053 C1047.145,902.053 1051.623,906.530 1051.623,912.053 L1051.623,1099.379 C1051.623,1104.902 1047.145,1109.379 1041.623,1109.379 L196.932,1109.379 C191.409,1109.379 186.932,1104.902 186.932,1099.379 L186.932,912.053 C186.932,906.530 191.409,902.053 196.932,902.053 ZM1043.056,861.742 L198.365,861.742 C192.843,861.742 188.365,857.265 188.365,851.742 L188.365,664.416 C188.365,658.893 192.843,654.416 198.365,654.416 L1043.056,654.416 C1048.579,654.416 1053.056,658.893 1053.056,664.416 L1053.056,851.742 C1053.056,857.265 1048.579,861.742 1043.056,861.742 ZM1116.372,576.664 L992.638,576.664 L894.803,432.685 L1018.536,432.685 L1116.372,576.664 ZM894.803,576.664 L771.069,576.664 L673.233,432.685 L796.967,432.685 L894.803,576.664 ZM230.095,432.685 L353.828,432.685 L451.664,576.664 L327.930,576.664 L230.095,432.685 ZM673.233,576.664 L549.500,576.664 L451.664,432.685 L575.397,432.685 L673.233,576.664 Z"
      />
    </Icon>
  );
}

export default Clapperboard;

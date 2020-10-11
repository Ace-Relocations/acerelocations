import React from 'react';
import { Page, Document, Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import Header from '../Header/Header';
import FooterWithImage from '../FooterWithImage/FooterWithImage';

const rows = [];
for (var i = 1; i <= 20; i++) {
  rows.push(
    <View style={{ width: '5%', borderRight: 1 }}>
      <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>{i}</Text>
    </View>,
  );
}

const TellySheetTable = () => {
  return (
    <View>
      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>1</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>2</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>3</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>4</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>5</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>6</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>7</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>8</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>9</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>10</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>11</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>12</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>13</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>14</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>15</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>16</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>17</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>18</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>19</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>20</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>21</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>23</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>23</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>24</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>25</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>26</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>27</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>28</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>29</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>30</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>31</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>32</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>33</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>34</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>35</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>36</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>37</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>38</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>39</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>40</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>41</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>42</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>43</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>44</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>45</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>46</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>47</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>48</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>49</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>50</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>51</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>52</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>53</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>54</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>55</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>56</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>57</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>58</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>59</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>60</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>61</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>62</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>63</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>64</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>65</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>66</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>67</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>68</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>69</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>70</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>71</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>72</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>73</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>74</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>75</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>76</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>77</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>78</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>79</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>80</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>81</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>82</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>83</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>84</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>85</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>86</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>87</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>88</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>89</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>90</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>91</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>92</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>93</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>94</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>95</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>96</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>97</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>98</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>99</Text>
        </View>
        <View style={{ width: '5%', borderRight: 1 }}>
          <Text style={{ textAlign: 'center', marginVertical: 'auto' }}>100</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', border: 1, width: '100%', display: 'flex' }}>
        {/* <View style={{ width: '100%' }}>
          <Text>1</Text>
        </View> */}
        {rows}
      </View>
    </View>
  );
};

export default TellySheetTable;

// Event Time Picker
const TimePicker = ({ setHours, setMinutes }) => {
  return (
    <div className="flex self-center justify-center mt-2 p-5 lg:mt-4 border border-blue-400 rounded-lg text-black">
      <div className="flex">
        <select
          name="hours"
          className="text-4xl appearance-none outline-none"
          onChange={(e) => setHours(e.target.value)}
        >
          <option value="00">00</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="12">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
        </select>
        <span className="text-4xl mx-2">:</span>
        <select
          name="minutes"
          className="text-4xl appearance-none outline-none mr-4"
          onChange={(e) => setMinutes(e.target.value)}
        >
          <option value="0">00</option>
          <option value="0">10</option>
          <option value="0">15</option>
          <option value="0">20</option>
          <option value="0">25</option>
          <option value="30">30</option>
          <option value="35">35</option>
          <option value="40">40</option>
          <option value="45">45</option>
          <option value="50">50</option>
          <option value="55">55</option>
        </select>
      </div>
    </div>
  );
};

export default TimePicker;

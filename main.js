var app = angular.module('ListUser', []);

app.controller('PersonsController', function ($scope) {

	$scope.search = "";
	$scope.order = "email";
	$scope.selectedIndex = null;
	$scope.selectedPerson = null;

	$scope.selectPerson = function (person, index) {
		$scope.selectedIndex = index;
		$scope.selectedPerson = person;
	};

	$scope.sensitiveSearch = function(person) {
		if ($scope.search) {
			return person.name.indexOf($scope.search) == 0 ||
				     person.email.indexOf($scope.search) == 0;
		}
		return true;
	};

	$scope.persons = [
		{
			"name": "Nguyễn An",
			"email": "AnNguyen@gmail.com",
			"birthdate": "2015-03-23",
			"phonenumber": "0165 215 3365",
			"address": "30 Hai Ba Trung",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "Trần Hải",
			"email": "TranHai@live.com",
			"birthdate": "2015-12-28",
			"phonenumber": "0125 478 5598",
			"address": "36 Le Duẩn",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "William Nguyễn",
			"email": "William@demo.net",
			"birthdate": "2015-07-30",
			"phonenumber": "0157 856 7784",
			"address": "12 Tran Nhan Tong",
			"city": "Nha Trang",
			"country": "Viet Nam"
		},
		{
			"name": "Trần Quỳnh Nhi",
			"email": "QuynhNhi@gmail.com",
			"birthdate": "2014-06-01",
			"phonenumber": "076 4830 0002",
			"address": "23 Lý Thường Kiệt",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "Nguyễn Thị Bình",
			"email": "NTBinh@live.com",
			"birthdate": "2014-07-17",
			"phonenumber": "(08) 68589 3911",
			"address": "560 Ly Thái Tổ",
			"city": "Đà Nẵng",
			"country": "Viet Nam"
		},
		{
			"name": "Lê Anh Kỳ",
			"email": "AnhKy@gmail.com",
			"birthdate": "2015-12-11",
			"phonenumber": "0202020205",
			"address": "299 Nguyễn Du",
			"city": "Quãng Ngãi",
			"country": "Viet Nam"
		},
		{
			"name": "Đào Hải Hà",
			"email": "HaiHa@live.com",
			"birthdate": "2015-04-07",
			"phonenumber": "0800 090144",
			"address": "295 đường số 7, Thủ Đức",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "Nguyễn Thị Mộng",
			"email": "MongThi@gmail.com",
			"birthdate": "2014-09-22",
			"phonenumber": "0213 548 6645",
			"address": "32 Đinh Tiên Hoàn",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "Phạm Quốc Hương",
			"email": "PhamMy@gmail.com",
			"birthdate": "2014-10-22",
			"phonenumber": "(08) 246 298",
			"address": "21 Nam Kỳ Khởi Nghĩa",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "Trần Viên Hào",
			"email": "VienHao@gmail.com",
			"birthdate": "2016-02-04",
			"phonenumber": "070 7348 5382",
			"address": "27 Nguyễn Thị Thập",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "Trần Thị Nữ",
			"email": "TranNu@yahoo.com",
			"birthdate": "2014-08-08",
			"phonenumber": "0125 698 4587",
			"address": "25 Lý Thái Tổ",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "Reece Figueroa",
			"email": "tellus@primisin.net",
			"birthdate": "2016-01-01T",
			"phonenumber": "(0118) 864 1600",
			"address": "Ap #974-8842 Duis Ave",
			"city": "Pagazzano",
			"country": "Sao Tome and Principe"
		},
		{
			"name": "Ngô Xuân Hậu",
			"email": "HauNgo@gmail.com",
			"birthdate": "2015-04-26",
			"phonenumber": "0800 750400",
			"address": "Ap #139-2923 Sem. Rd.",
			"city": "TP.HCM",
			"country": "VietNam"
		},
		{
			"name": "Xuân Vinh",
			"email": "XV0025@gmail.com",
			"birthdate": "2014-10-31",
			"phonenumber": "0125 635 8874",
			"address": "25 An Đông",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "Mr. Siro",
			"email": "siro@yahoo.com",
			"birthdate": "2015-07-04",
			"phonenumber": "056 8529 1645",
			"address": "12 Vĩnh Viễn",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "Tạ Quang Thắng",
			"email": "Laco@gmail.com",
			"birthdate": "2014-04-23",
			"phonenumber": "0125 748 7774",
			"address": "56 Hải Triều",
			"city": "Hà Nội",
			"country": "Viet Nam"
		},
		{
			"name": "Lucian Gomez",
			"email": "augue.id.ante@Cumsociis.edu",
			"birthdate": "2015-12-30",
			"phonenumber": "(028) 6676 3701",
			"address": "P.O. Box 489, 5285 Proin Rd.",
			"city": "Laino Castello",
			"country": "Slovenia"
		},
		{
			"name": "Việt Quốc Ngữ",
			"email": "VietNgu@gmail.com",
			"birthdate": "2014-06-09",
			"phonenumber": "0500 911378",
			"address": "25 Cao Thắng",
			"city": "Vũng Tàu",
			"country": "Viet Nam"
		},
		{
			"name": "Đinh Ngọc Vinh",
			"email": "NgocVinh@gmail.com",
			"birthdate": "2015-07-09",
			"phonenumber": "(08) 232 3739",
			"address": "32 Nguyễn Thị Thập",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "Aristotle Matthews",
			"email": "eros.turpis@Integerurna.edu",
			"birthdate": "2014-09-09",
			"phonenumber": "0800 929617",
			"address": "9971 Aliquam Avenue",
			"city": "Gerpinnes",
			"country": "Tajikistan"
		},
		{
			"name": "Valentine Cervantes",
			"email": "Fusce.fermentum.fermentum@urnaNuncquis.co.uk",
			"birthdate": "2015-05-16",
			"phonenumber": "0800 088902",
			"address": "P.O. Box 263, 5634 Facilisi. Ave",
			"city": "Nandyal",
			"country": "Norway"
		},
		{
			"name": "Trần Hữu Nghị",
			"email": "HuuNghi@gmail.com",
			"birthdate": "2014-06-12",
			"phonenumber": "(01412) 250012",
			"address": "32 Hồ Xuân Hương",
			"city": "Hà Nội",
			"country": "Viet Nam"
		},
		{
			"name": "Đỗ Kiến Bình",
			"email": "KienBinh@gmail.com",
			"birthdate": "2015-12-13",
			"phonenumber": "(08) 332 5673",
			"address": "21 Võ Thị Sáu",
			"city": "TP.HCM",
			"country": "Viet Nam"
		},
		{
			"name": "Yasir Sosa",
			"email": "bibendum.fermentum@CrasinterdumNunc.org",
			"birthdate": "2014-07-19",
			"phonenumber": "055 7799 2635",
			"address": "P.O. Box 140, 7479 Ipsum. Rd.",
			"city": "Governador Valadares",
			"country": "Namibia"
		},
		{
			"name": "Cruz Jennings",
			"email": "ipsum.Suspendisse@arcu.net",
			"birthdate": "2015-07-03",
			"phonenumber": "07750 484238",
			"address": "129-6174 Massa. Road",
			"city": "Pabianice",
			"country": "Suriname"
		},
		{
			"name": "Blaze Keller",
			"email": "neque.venenatis.lacus@acarcu.edu",
			"birthdate": "2015-11-16T22:14:29-08:00",
			"phonenumber": "(028) 4719 1558",
			"address": "P.O. Box 511, 6059 Ut Ave",
			"city": "Drachten",
			"country": "Åland Islands"
		},
		{
			"name": "Dale Rodriguez",
			"email": "molestie.in.tempus@Fusce.com",
			"birthdate": "2014-12-15",
			"phonenumber": "(01469) 96494",
			"address": "249-3137 Nec, St.",
			"city": "Acquasparta",
			"country": "Comoros"
		},
		{
			"name": "Connor Dorsey",
			"email": "non.sollicitudin@sitametrisus.ca",
			"birthdate": "2014-11-10T13:24:04-08:00",
			"phonenumber": "0800 582052",
			"address": "6918 Vulputate, Road",
			"city": "Ponti",
			"country": "Lebanon"
		},
		{
			"name": "Ira Carroll",
			"email": "interdum.Curabitur.dictum@augueidante.co.uk",
			"birthdate": "2014-08-11",
			"phonenumber": "(0111) 470 8010",
			"address": "P.O. Box 284, 2166 Pharetra. Rd.",
			"city": "College",
			"country": "Sint Maarten"
		},
		{
			"name": "Clark Gilbert",
			"email": "urna.et@nectempusmauris.ca",
			"birthdate": "2015-04-11",
			"phonenumber": "(016977) 6357",
			"address": "Ap #603-6579 Vitae Av.",
			"city": "Meer",
			"country": "Haiti"
		},
		{
			"name": "Wayne Hughes",
			"email": "vulputate.eu.odio@ipsumnuncid.com",
			"birthdate": "2015-09-07",
			"phonenumber": "(01165) 332450",
			"address": "Ap #435-2695 Odio Av.",
			"city": "Rhyl",
			"country": "French Polynesia"
		},
		
		
		
	]
});
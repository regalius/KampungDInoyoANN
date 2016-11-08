<?php
	$result=0;
	$jenis = $_POST['tipeKerajinan'];
	$bulan = $_POST['bulan'];
	$tahun = $_POST['tahun'];

	if ($tahun>2014){
		  $result="Data inputan tidak lengkap";
	}else{
		echo"<script>
		    hasil('".$jenis."',".$tahun.",".$bulan.");
		</script>)>";
	}
?>

<section id="resultSection">
<h2>Hasil peramalan tingkat penjualan keramik<?php echo " pada Bulan ".$bulan." Tahun ".$tahun."" ?></h2><br/>
<p id='result'><?php echo $result ?></p>
</section>


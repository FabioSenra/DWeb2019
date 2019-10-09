<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="ARQELEM">
        <h1 align="center">
            <xsl:value-of select="IDENTI"/>
        </h1>
        <h2>
            Arqueossítio do concelho de
            <xsl:value-of select="CONCEL"/>
        </h2>
        
        <table class="w3-table w3-striped">
            <tr>
                <td>
                    <th>Descrição</th><td><xsl:value-of select="DESCRI"/></td>
                </td>       
             </tr>
             <tr>
                <td>
                    <th>Acesso</th><td><xsl:value-of select="ACESSO"/></td>
                </td>
             </tr>
        </table>
        
        <h3>Resumo:</h3>
        
        <p><xsl:value-of select="DESARQ"/></p>
        
        <h3>Bibliografia:</h3>
        <ul>
            <xsl:for-each select="BIBLIO">
            <li><xsl:value-of select="."/></li>
            </xsl:for-each>
        </ul>
    </xsl:template>
    
    
</xsl:stylesheet>